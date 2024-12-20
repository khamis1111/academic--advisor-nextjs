"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  firstYearCourses,
  fourthYearCourses,
  secondYearCourses,
  thirdYearCourses,
} from "@/utils/coursesData";
import { Checkbox } from "@/components/ui/checkbox";
import { Globe } from "lucide-react";
import PassedCoursesSelector from "@/components/passed-courses-selector";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
  temperature: 2,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

export default function StudentAdvisors() {
  const [step, setStep] = useState(1);
  const [gpa, setGpa] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");
  const [term, setTerm] = useState("");
  const [lang, setLang] = useState(false);
  const [progress, setProgress] = useState(0); // Value between 0 and 1
  const [totalCredits, setTotalCredits] = useState(0);
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    setSelected([]);
  }, [term]);

  useEffect(() => {
    setTotalCredits(
      selected?.reduce((sum, item) => sum + (item.credits || 0), 0)
    );
  }, [selected]);

  useEffect(() => {
    setCredits(gpa < 2 ? 12 : 18);
  }, [gpa]);

  const courses = () => {
    let items = [];
    let year;

    switch (level) {
      case "first":
        year = firstYearCourses;
        break;
      case "second":
        year = secondYearCourses;
        break;
      case "third":
        year = thirdYearCourses.filter(
          (data) => data.department === department
        );
        break;
      case "fourth":
        year = fourthYearCourses.filter(
          (data) => data.department === department
        );
        break;
      default:
        year = [];
        break;
    }

    if (term === "first") {
      items = year.filter((data) => data.term === "term1");
    } else if (term === "second") {
      items = year.filter((data) => data.term === "term2");
    }

    return items;
  };

  const handleSubmit = async (e) => {
    let prompt;

    e.preventDefault();
    setLoading(true);

    const coursesDetails = courses().map((course) => {
      const prerequisitesNames =
        course.prerequisites.length > 0
          ? course.prerequisites
              .map(
                (code) =>
                  firstYearCourses.find((data) => data.courseCode === code)
                    ?.nameAr ||
                  secondYearCourses.find((data) => data.courseCode === code)
                    ?.nameAr ||
                  thirdYearCourses.find((data) => data.courseCode === code)
                    ?.nameAr ||
                  fourthYearCourses.find((data) => data.courseCode === code)
                    ?.nameAr
              )
              .join(", ")
          : "لا يوجد";

      return `${course.nameAr} (${course.name}) - ساعات معتمدة: ${course.credits}, المتطلبات المسبقة: ${prerequisitesNames}`;
    });

    prompt = `
      أنت مرشد أكاديمي لطلاب في الجامعة. طالب حاصل على GPA بقيمة ${gpa} يرغب في التسجيل في المواد التالية:

      ${selected.map((data) => data.name)}

      ${completed.length > 0 ? "هذه هي تفاصيل جميع المواد التي اجتازها:" : ""}
      ${completed.map((data) => data.name)}

      هذه هي تفاصيل جميع المواد المتاحة:
      
      ${coursesDetails}

      ويجب ان يكون عدد الساعات الكلي للمواد المختارة ليس اكبر من ${credits}.

      بناءً على هذه المعلومات، يرجى تقديم النصيحة بشأن:
      1. ما هي متطلبات كل مادة تم اختيارها.
      2. ما إذا كان الطالب يمكنه التسجيل في جميع المواد المطلوبة.
      3. إذا كان لا يمكنه التسجيل في بعض المواد، أي المواد يمكنه تسجيلها ولماذا.
      4. اقتراحات للمواد البديلة إذا كانت بعض المواد غير متاحة أو غير مناسبة.
      5. أي نصائح أكاديمية أخرى بناءً على معدله التراكمي واختياره للمواد.

      يرجى تقديم الإجابة باللغة العربية وبشكل واضح ومختصر
    `;

    try {
      const result = await model.generateContent(prompt, generationConfig);
      setAdvice(result.response.text());
    } catch (error) {
      console.error("Error generating advice:", error);
      setAdvice("حدث خطأ أثناء الحصول على النصيحة. يرجى المحاولة مرة أخرى.");
    }

    console.log(prompt);

    setLoading(false);
    setStep(5);
    setProgress((prev) => prev + 0.4);
  };

  const formSteps = [
    {
      title: "المعلومات الأساسية",
      fields: (
        <>
          <div className="space-y-2">
            <Label htmlFor="gpa">المعدل التراكمي (GPA)</Label>
            <Input
              placeholder="المعدل التراكمي (GPA)"
              id="gpa"
              type="number"
              step="0.01"
              min="0"
              max="4"
              value={gpa}
              onChange={(e) =>
                e.target.value >= 0 && e.target.value <= 4
                  ? setGpa(e.target.value)
                  : null
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="level">المستوى الدراسي</Label>
            <Select
              onValueChange={setLevel}
              disabled={!gpa}
              defaultValue={level}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر المستوى الدراسي" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first">السنة الأولى</SelectItem>
                <SelectItem value="second">السنة الثانية</SelectItem>
                <SelectItem value="third">السنة الثالثة</SelectItem>
                <SelectItem value="fourth">السنة الرابعة</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      ),
    },
    {
      title: "معلومات القسم والفصل الدراسي",
      fields: (
        <>
          <div className="space-y-2">
            <Label htmlFor="department">القسم</Label>
            <Select
              onValueChange={setDepartment}
              disabled={level === "third" || level === "fourth" ? false : true}
              defaultValue={department}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر القسم" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CS">علوم الحاسب - CS</SelectItem>
                <SelectItem value="IS">نظم المعلومات - IS</SelectItem>
                <SelectItem value="IT">تكنولوجيا المعلومات - IT</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="term">الفصل الدراسي الحالي</Label>
            <Select
              onValueChange={setTerm}
              disabled={
                level === "third" || level === "fourth" ? !department : !level
              }
              defaultValue={term}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر الفصل الدراسي" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first">الفصل الأول</SelectItem>
                <SelectItem value="second">الفصل الثاني</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      ),
    },
    {
      title: "اختر المواد التي أتممت دراستها بنجاح",
      fields: (
        <PassedCoursesSelector
          level={level}
          department={department}
          passedCourses={completed}
          setPassedCourses={setCompleted}
          lang={lang}
        />
      ),
    },
    {
      title: "اختر المواد التي ترغب في تسجيلها",
      fields: (
        <div className="space-y-4">
          {courses()?.length !== 0 ? (
            <>
              <div className="flex items-center justify-between">
                <Label>المواد المتاحة</Label>
                <Label
                  className={`${
                    credits < totalCredits && "text-red-500 font-bold"
                  }`}
                >
                  اجمالي عدد الساعات المتاحة {credits} من {totalCredits}
                </Label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses()?.map((course) => (
                  <label
                    key={course.courseCode}
                    className="flex items-center space-x-2 rtl:space-x-reverse"
                  >
                    <Checkbox
                      value={course.name}
                      checked={selected.includes(course)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? setSelected([...selected, course])
                          : setSelected(
                              selected.filter((value) => value !== course)
                            );
                      }}
                    />
                    <span>{lang ? course.name : course.nameAr}</span>
                  </label>
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-40">
              <p className="text-center text-2xl md:text-3xl font-medium">
                يرجى استكمال البيانات المطلوبة 😪
              </p>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        نظام الإرشاد الأكاديمي
      </h1>
      <AnimatePresence mode="wait">
        {step < 5 ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {formSteps[step - 1].title}
              </h2>
              {(step === 3 || step === 4) && (
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="cursor-pointer hover:animate-pulse"
                  onClick={() => setLang((prev) => !prev)}
                >
                  <Globe className="h-6 w-6" />
                </motion.div>
              )}
            </div>
            <form className="space-y-6">
              {formSteps[step - 1].fields}
              <div className="flex justify-between">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setStep(
                        step === 4 && level === "first" ? step - 2 : step - 1
                      );
                      setProgress((prev) =>
                        level === "first" ? prev - 0.4 : prev - 0.25
                      );
                    }}
                  >
                    السابق
                  </Button>
                )}
                {step < 4 ? (
                  <Button
                    type="button"
                    onClick={() => {
                      setStep(
                        step === 2 && level === "first" ? step + 2 : step + 1
                      );
                      setProgress((prev) =>
                        level === "first" ? prev + 0.4 : prev + 0.25
                      );
                    }}
                    disabled={!gpa || !level}
                  >
                    {completed.length === 0 && step === 3 ? "تخطي" : "التالي"}
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={
                      loading ||
                      !term ||
                      !level ||
                      !gpa ||
                      selected.length === 0
                      // credits < totalCredits
                    }
                    onClick={handleSubmit}
                    className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  >
                    {loading ? "جاري التحميل..." : "الحصول على النصيحة"}
                  </Button>
                )}
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">النصيحة الأكاديمية</h2>
            {loading ? (
              <Skeleton className="w-full h-40" />
            ) : (
              <div className="bg-white shadow-lg rounded-lg p-6 whitespace-pre-wrap">
                {advice}
              </div>
            )}
            <Button
              className="mt-6"
              onClick={() => {
                setStep(1);
                setProgress(0);
              }}
            >
              بدء استشارة جديدة
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Khamis Team */}
      <motion.div
        initial={{ opacity: 0, x: -50, width: "2rem" }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ width: "8rem" }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-5 left-5 w-8 h-8 flex items-center justify-center bg-slate-950 shadow-lg shadow-slate-950/40 text-white rounded-full overflow-hidden group"
      >
        <div className="flex items-center gap-2">
          <p className="text-nowrap text-sm group-hover:block hidden">
            🌹 By Khamis
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              d="M7.157 0 2.333 9.408l-.56 1.092H7a.25.25 0 0 1 .25.25V16h1.593l4.824-9.408.56-1.092H9a.25.25 0 0 1-.25-.25V0H7.157ZM7 9H4.227L7.25 3.106V5.25C7.25 6.216 8.034 7 9 7h2.773L8.75 12.894V10.75A1.75 1.75 0 0 0 7 9Z"
              clipRule="evenodd"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </motion.div>
      {/* progress-bar */}
      <motion.div
        className={`progress-bar ${
          progress && "h-1"
        }  rounded-r-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
        animate={{ scaleX: progress }} // Animate the scaleX
        transition={{ duration: 0.5 }} // Smooth transition
      />
    </div>
  );
}
