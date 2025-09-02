// src/lib/blogs_contents_structure.tsx

import {
  BlogSection,
  BlogHeader,
  BlogCode,
  BlogFigure,
  BlogBestPractices,
} from '@/components/blogs/articles/blog-elements';
import {
  KeyRound,
  Braces,
  Lock,
  Network,
  Info,
  Globe,
  Database,
} from 'lucide-react';

// ==================== Specialized Content Components ====================
export function JavaScriptFundamentalsContent() {
  type BestPracticeType = 'success' | 'warning' | 'info';
  interface BestPracticeItem {
    type: BestPracticeType;
    text: string;
  }

  const variableTypes = [
    {
      id: 'var-section',
      title: 'var — Function & Global Scope',
      icon: KeyRound,
      iconColor: 'text-violet-400',
      description: 'الـ var له function-level و global-level scope',
      example: `// Global scope
var a = 5;

function fun() {
  var b = 4;
  console.log(a); // ✅ يطبع 5
  console.log(b); // ✅ يطبع 4
}
fun();

console.log(a); // ✅ يطبع 5  
console.log(b); // ❌ ReferenceError`,
      features: [
        { type: 'success', text: 'يعمل عالمياً إذا تم تصريحه خارج الدوال' },
        { type: 'success', text: 'Function-scoped إذا تم تصريحه داخل دالة' },
        { type: 'warning', text: 'لا يحترم block scope (مثل داخل if أو for)' },
      ] as BestPracticeItem[],
    },
    {
      id: 'let-section',
      title: 'let — Block Scope',
      icon: Braces,
      iconColor: 'text-fuchsia-400',
      description:
        'let يقدم block-level scope. المتغير موجود فقط داخل {} المحيطة',
      example: `var a = 5;

if (a > 1) {
  var b = 6; // function/global scoped
  let c = 7; // block scoped
}

console.log(a); // ✅ يطبع 5
console.log(b); // ✅ يطبع 6 
console.log(c); // ❌ ReferenceError`,
      features: [
        { type: 'success', text: 'أكثر أماناً من var لأنه يحترم حدود الكتل' },
        {
          type: 'success',
          text: 'مفضل في الحلقات (for، while) لتجنب التسريبات',
        },
        { type: 'warning', text: 'لا يمكن إعادة تصريحه في نفس الكتلة' },
      ] as BestPracticeItem[],
    },
    {
      id: 'const-section',
      title: 'const — Constants & Immutability',
      icon: Lock,
      iconColor: 'text-sky-400',
      description: 'const يصرح عن ثوابت. مرجع المتغير لا يمكن إعادة تعيينه',
      example: `// قيمة بدائية ثابتة
const x = 5;
x = 6; // ❌ TypeError

// كائنات مع const
const obj = { name: 'علي', age: 21 };
obj.name = 'عمر';
console.log(obj); // ✅ { name: 'عمر', age: 21 }`,
      features: [
        { type: 'success', text: 'يضمن أن المرجع لن يتغير' },
        { type: 'success', text: 'مثالي للثوابت والإعدادات وتعبيرات الدوال' },
        { type: 'warning', text: 'الكائنات/المصفوفات تبقى قابلة للتغيير' },
      ] as BestPracticeItem[],
    },
  ];

  return (
    <article className='prose prose-invert max-w-none leading-relaxed'>
      <BlogHeader
        title='An Introduction to JavaScript'
        description='A comprehensive introduction to JavaScript, covering essential concepts, syntax, and best practices for beginners. Start your coding journey here!'
      />

      {variableTypes.map((varType) => (
        <BlogSection
          key={varType.id}
          id={varType.id}
          title={varType.title}
          icon={varType.icon}
          iconColor={varType.iconColor}
          description={varType.description}
        >
          <p className='text-zinc-300'>{varType.description}</p>
          <BlogFigure caption='Example' code={varType.example} />
          <BlogBestPractices items={varType.features} />
        </BlogSection>
      ))}

      <BlogBestPractices
        title='Best Practices'
        items={[
          {
            type: 'success',
            text: (
              <>
                {' '}
                Prefer <code className='rounded bg-zinc-800 px-1'>
                  const
                </code>{' '}
                by default.
              </>
            ),
          },
          {
            type: 'success',
            text: (
              <>
                {' '}
                Use <code className='rounded bg-zinc-800 px-1'>let</code> when
                reassignment is required.
              </>
            ),
          },
          {
            type: 'warning',
            text: (
              <>
                {' '}
                Avoid <code className='rounded bg-zinc-800 px-1'>var</code>{' '}
                unless maintaining legacy code.
              </>
            ),
          },
        ]}
      />
    </article>
  );
}

export function ApiReactContent() {
  return (
    <article
      dir='rtl'
      className='prose prose-invert max-w-none leading-relaxed text-right'
    >
      <BlogHeader
        title='جلب بيانات API في React باستخدام Axios'
        description='دليل شامل لإتقان التعامل مع APIs في React مع أفضل الممارسات ومعالجة الأخطاء'
      />

      <BlogSection
        id='api-intro'
        title='ما هو الـ API ولماذا نحتاجه؟'
        icon={Network}
        iconColor='text-blue-400'
        description='API (واجهة برمجة التطبيقات) هي مجموعة من القواعد التي تسمح لتطبيقين بالتواصل مع بعضهما البعض.'
      >
        <p className='text-slate-300'>
          الـ API هو حلقة الوصل بين نظامين مختلفين لتبادل البيانات بسهولة. تخيله
          زي "النادل" في المطعم: تطلب منه طبق (Request)، يأخذه للمطبخ (Server)،
          ويرجعلك الطبق جاهز (Response).
        </p>
      </BlogSection>

      <BlogSection
        id='api-types'
        title='أنواع الـ APIs'
        icon={Info}
        iconColor='text-blue-400'
        description='هناك أنواع مختلفة من الـ APIs بناءً على الوصول والاستخدام.'
      >
        <div className='space-y-4'>
          <div>
            <h4 className='flex items-center gap-2 text-lg font-semibold'>
              <Globe className='w-5 h-5 text-green-400' />
              1. واجهات عامة بدون مفتاح
            </h4>
            <p>مفتوحة للجميع، مناسبة للتعلم والتجارب</p>
            <BlogCode code='GET https://jsonplaceholder.typicode.com/users' />
          </div>

          <div>
            <h4 className='flex items-center gap-2 text-lg font-semibold'>
              <KeyRound className='w-5 h-5 text-yellow-400' />
              2. واجهات عامة مع مفتاح
            </h4>
            <p>تحتاج API Key للمراقبة ومنع الاستغلال</p>
            <BlogCode code='GET https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY' />
          </div>
        </div>
      </BlogSection>

      <BlogSection
        id='fetch-methods'
        title='طرق جلب البيانات'
        icon={Database}
        iconColor='text-yellow-300'
        description='طرق شائعة لجلب البيانات من APIs في React'
      >
        <div className='space-y-6'>
          <div>
            <h4 className='text-lg font-semibold mb-2'>استخدام fetch()</h4>
            <p>ميزة موجودة في المتصفح بدون مكتبات إضافية</p>
            <BlogFigure
              caption='مثال fetch'
              code={`import { useEffect, useState } from "react";

function UsersWithFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>جاري التحميل...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
}`}
            />
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-2'>استخدام Axios</h4>
            <p>مكتبة قوية تسهل التعامل مع الطلبات ومعالجة الأخطاء</p>
            <BlogFigure
              caption='مثال Axios'
              code={`import { useEffect, useState } from "react";
import axios from "axios";

function UsersWithAxios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("فشل في جلب البيانات");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader2 className="animate-spin" />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
}`}
            />
          </div>
        </div>
      </BlogSection>

      <BlogSection
        id='security'
        title='تأمين مفاتيح الـ API'
        icon={KeyRound}
        iconColor='text-indigo-600'
        description='أفضل الممارسات لحماية مفاتيح الـ API'
      >
        <p>عند التعامل مع APIs تتطلب مفتاح، راعي الأمان:</p>
        <ol className='list-decimal list-inside space-y-2 text-slate-300'>
          <li>أنشئ ملف .env في جذر المشروع</li>
          <li>أضف متغير البيئة (يبدأ بـ VITE_ في Vite)</li>
          <li>أضف .env لملف .gitignore</li>
        </ol>

        <BlogFigure
          caption='مثال على حفظ المفاتيح'
          code={`# ملف .env
VITE_API_KEY=your_actual_key_here

# استخدامه في الكود
const apiKey = import.meta.env.VITE_API_KEY;
axios.get(\`https://api.example.com/data?apikey=\${apiKey}\`)`}
        />
      </BlogSection>
    </article>
  );
}
