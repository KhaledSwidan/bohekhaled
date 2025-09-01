/* eslint-disable react-refresh/only-export-components */
// src/lib/blogs_contents_structure.tsx

import LoadingSection from '@/components/loading-section';
import {
  BlogSection,
  BlogHeader,
  BlogCode,
  BlogQuote,
  BlogList,
  BlogFigure,
  BlogBestPractices,
} from '@/components/blogs/blog-elements';
import {
  ArrowUp,
  Code,
  AlertTriangle,
  FileCode2,
  Quote,
  Rocket,
  Palette,
  Settings,
  Cpu,
  Layers,
  KeyRound,
  Braces,
  Lock,
  Network,
  Info,
  Globe,
  Database,
  //   Lightbulb,
  //   CheckCircle2,
  //   BookOpen,
  //   Zap,
  //   CheckCircle,
  //   ScrollText,
  //   Server,
  //   ArrowLeft,
  //   ShieldCheck,
  //   MessageCircleWarning,
  //   ChevronsLeftRightEllipsis,
  //   FileCode,
  //   Footprints,
  //   Sparkles,
  //   Loader2,
  //   Pin,
} from 'lucide-react';
import type { BlogContentConfig } from '@/types/blogs';

// ==================== Content Configurations ====================
const frontendSkillsConfig: BlogContentConfig = {
  title: 'كيفية تحسين مهاراتك في Frontend',
  description: 'نصائح عملية وأدوات ومنهجية لتصبح مطور frontend أفضل في 2025',
  sections: [
    {
      id: 'basics',
      title: '1. إتقان الأساسيات (HTML, CSS, JavaScript)',
      icon: Code,
      iconColor: 'text-blue-400',
      content: (
        <>
          <p>حتى لو كنت متخصص في React أو Next.js، الأساسيات لازم تكون قوية:</p>
          <BlogList
            items={[
              {
                icon: Code,
                iconColor: 'text-orange-400',
                title: 'HTML Semantics:',
                content:
                  'استخدم تاجات مثل <article>، <section>، <header> بشكل صحيح للوصولية والـ SEO.',
              },
              {
                icon: Palette,
                iconColor: 'text-pink-400',
                title: 'CSS & Tailwind:',
                content:
                  'ركز على flex، grid، responsive design، و Tailwind utilities.',
              },
              {
                icon: Cpu,
                iconColor: 'text-green-400',
                title: 'JavaScript ES6+:',
                content:
                  'تعلم destructuring، spread operators، async/await، و DOM manipulation.',
              },
            ]}
          />

          <BlogFigure
            caption='مثال عملي على HTML دلالي'
            code={`<article>
  <header>
    <h1>عنوان مدونتي</h1>
    <time datetime="2025-08-19">19 أغسطس، 2025</time>
  </header>
  <p>هذا مثال على HTML دلالي.</p>
</article>`}
          />
        </>
      ),
    },
    {
      id: 'frameworks',
      title: '2. تعلم Framework حديث بعمق (React, Next.js, Vue/Angular)',
      icon: Layers,
      iconColor: 'text-purple-400',
      content: (
        <>
          <p>
            أغلب الشركات الآن تستخدم React أو Next.js للمشاريع الحديثة. المهارات
            الأساسية:
          </p>
          <BlogList
            items={[
              {
                icon: Code,
                iconColor: 'text-cyan-400',
                title: 'React:',
                content: 'Hooks (useState, useEffect)، Context، Custom Hooks.',
              },
              {
                icon: Rocket,
                iconColor: 'text-indigo-400',
                title: 'Next.js:',
                content: 'SSR، Static Generation، API routes.',
              },
              {
                icon: Settings,
                iconColor: 'text-emerald-400',
                title: 'State Management:',
                content: 'Zustand، Redux، أو React Query.',
              },
            ]}
          />

          <BlogFigure
            caption='مثال على React Hook'
            code={`import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`}
          />
        </>
      ),
    },
  ],
};

const hoistingConfig: BlogContentConfig = {
  title: 'فهم Hoisting في JavaScript',
  description:
    'Hoisting هو سلوك JavaScript في وقت الترجمة حيث تتم معالجة التصريحات قبل التنفيذ',
  sections: [
    {
      id: 'what-gets-hoisted',
      title: 'ما الذي يتم رفعه فعلاً؟',
      icon: ArrowUp,
      iconColor: 'text-green-400',
      content: (
        <BlogList
          items={[
            {
              icon: Code,
              iconColor: 'text-blue-400',
              title: 'var',
              content: 'يتم رفعه وتهيئته بـ undefined.',
            },
            {
              icon: FileCode2,
              iconColor: 'text-purple-400',
              title: 'Function declarations',
              content: 'يتم رفعه مع تعريفه (يمكن استدعاؤه مبكراً).',
            },
            {
              icon: AlertTriangle,
              iconColor: 'text-yellow-400',
              title: 'let / const / class',
              content: 'يتم رفعه لكن بدون تهيئة (TDZ).',
            },
          ]}
        />
      ),
    },
  ],
};

// ==================== Content Components ====================
export const BlogContent = {
  BlogContent_1: () => <BlogArticleRenderer config={frontendSkillsConfig} />,

  BlogContent_2: () => <BlogArticleRenderer config={hoistingConfig} />,

  BlogContent_3: () => (
    <article className='prose prose-invert max-w-none leading-relaxed'>
      <p>
        دليل شامل لتعلم React.js من المفاهيم الأساسية إلى التقنيات المتقدمة...
      </p>
      <LoadingSection />
    </article>
  ),

  BlogContent_4: () => <JavaScriptFundamentalsContent />,
  BlogContent_5: () => <ApiReactContent />,
};

// ==================== Reusable Article Renderer ====================
function BlogArticleRenderer({ config }: { config: BlogContentConfig }) {
  return (
    <article className='prose prose-invert max-w-none leading-relaxed'>
      <BlogHeader title={config.title} description={config.description} />

      {config.sections.map((section) => (
        <BlogSection
          key={section.id}
          id={section.id}
          title={section.title}
          icon={section.icon}
          iconColor={section.iconColor}
        >
          {section.content}
        </BlogSection>
      ))}

      <BlogQuote
        icon={Quote}
        text='أفضل طريقة لتصبح مطور Frontend محترف هي دمج التعلم العملي مع المشاريع الحقيقية ومواكبة أحدث الاتجاهات يومياً.'
      />
    </article>
  );
}

// ==================== Specialized Content Components ====================
function JavaScriptFundamentalsContent() {
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
        title='أساسيات JavaScript: فهم var، let، و const'
        description='مقدمة شاملة لـ JavaScript تغطي المفاهيم الأساسية والصياغة وأفضل الممارسات للمبتدئين'
      />

      {variableTypes.map((varType) => (
        <BlogSection
          key={varType.id}
          id={varType.id}
          title={varType.title}
          icon={varType.icon}
          iconColor={varType.iconColor}
        >
          <p className='text-zinc-300'>{varType.description}</p>
          <BlogFigure caption='مثال' code={varType.example} />
          <BlogBestPractices items={varType.features} />
        </BlogSection>
      ))}

      <BlogBestPractices
        title='أفضل الممارسات'
        items={[
          { type: 'success', text: 'فضل const بشكل افتراضي' },
          { type: 'success', text: 'استخدم let عند الحاجة لإعادة التعيين' },
          { type: 'warning', text: 'تجنب var إلا في الكود القديم' },
        ]}
      />
    </article>
  );
}

function ApiReactContent() {
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
