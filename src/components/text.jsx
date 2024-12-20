"use client";

import MultiSelect from "@/components/MultiSelect";
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
import {
  firstYearCourses,
  fourthYearCourses,
  secondYearCourses,
  thirdYearCourses,
} from "@/utils/coursesData";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
  temperature: 2,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export default function StudentAdvisors() {
  const [gpa, setGpa] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  const [level, setLevel] = useState("");
  const [department, setDepartment] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {
    setSelected([]);
  }, [term]);

  const courses = () => {
    let items;
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

      هذه هي تفاصيل جميع المواد المتاحة:
      
      ${coursesDetails}

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
  };

  return (
    <div className="p-4">
      <div className="h-14">
        <p className="text-2xl md:text-3xl font-semibold">
          مساعد المرشد الأكاديمي 👋
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* المدخلات */}
        <div className="space-y-3">
          <div className="">
            <Label>أدخل معدلك التراكمي* </Label>
            <Input
              label="أدخل معدلك التراكمي"
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
              placeholder="أدخل المعدل من 0 إلى 4"
              required
            />
          </div>
          <div className="">
            <Label>اختر مستواك الدراسي* </Label>
            <Select onValueChange={setLevel} disabled={!gpa}>
              <SelectTrigger className="">
                <SelectValue placeholder="اختر مستواك الدراسي" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first">المستوى الأول</SelectItem>
                <SelectItem value="second">المستوى الثاني</SelectItem>
                <SelectItem value="third">المستوى الثالث</SelectItem>
                <SelectItem value="fourth">المستوى الرابع</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {level === "third" || level === "fourth" ? (
            <div className="">
              <Label>اختر قسمك الدراسي* </Label>
              <Select onValueChange={setDepartment} disabled={!level}>
                <SelectTrigger className="">
                  <SelectValue placeholder="اختر قسمك الدراسي" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IS">نظم المعلومات</SelectItem>
                  <SelectItem value="CS">علوم الحاسوب</SelectItem>
                  <SelectItem value="IT">تكنولوجيا المعلومات</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : null}
          <div className="">
            <Label>اختر الفصل الدراسي* </Label>
            <Select
              onValueChange={setTerm}
              disabled={
                level === "third" || level === "fourth" ? !department : !level
              }
            >
              <SelectTrigger className="">
                <SelectValue placeholder="اختر الفصل الدراسي" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first">الفصل الأول</SelectItem>
                <SelectItem value="second">الفصل الثاني</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <Label>المقررات الدراسية لهذا الفصل* </Label>
            <MultiSelect
              disabled={!term}
              name={"Subjects"}
              selected={selected}
              setSelected={setSelected}
              items={courses()}
            />
          </div>
          <div className="text-end">
            <Button
              disabled={loading || selected.length === 0}
              onClick={handleSubmit}
            >
              {loading ? "جاري الحصول على النصيحة..." : "احصل على النصيحة"}
            </Button>
          </div>
        </div>

        {/* الاستجابة */}
        {loading ? (
          <Skeleton className="rounded-md shadow-sm h-[calc(100vh-5.5rem)] overflow-auto border" />
        ) : (
          <Card className="p-4 bg-gray-100 h-[calc(100vh-5.5rem)] overflow-auto">
            {advice ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-2">
                  نصيحة المرشد الأكاديمي:
                </h2>
                <p className="whitespace-pre-wrap">{advice}</p>
              </motion.div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-semibold">
                  أسرع للحصول على النصيحة 😀
                </p>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
