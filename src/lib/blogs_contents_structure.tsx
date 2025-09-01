// src/lib/blogs_contents_structure.tsx

import LoadingSection from '@/components/loading-section';
import {
  ArrowUp,
  Code,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  FileCode2,
  Quote,
  BookOpen,
  Rocket,
  Zap,
  Palette,
  Settings,
  Cpu,
  Layers,
  KeyRound,
  Braces,
  Lock,
  CheckCircle,
  ScrollText,
  Network,
  Server,
  ArrowLeft,
  Info,
  Globe,
  ShieldCheck,
  MessageCircleWarning,
  ChevronsLeftRightEllipsis,
  FileCode,
  Footprints,
  Database,
  Sparkles,
  Loader2,
  Pin,
} from 'lucide-react';

const contentStyle = {
  h2: 'text-xl font-bold text-slate-200 mb-2',
  p: 'text-slate-300',
};

export const BlogContent = {
  BlogContent_1: () => {
    return (
      <article
        className='prose prose-invert max-w-none leading-relaxed'
        itemScope
        itemType='https://schema.org/Article'
      >
        <p itemProp='description'>
          Frontend development is changing rapidly. With the evolution of tools
          and frameworks every year, we need to stay updated and continuously
          improve our skills. This article covers practical tips, tools, and
          mindset shifts to help you become a better Frontend developer in 2025.
        </p>

        <section id='basics' aria-labelledby='basics-heading' className='my-8'>
          <h2 id='basics-heading' className={contentStyle.h2}>
            <Code
              aria-hidden='true'
              className='inline w-6 h-6 text-blue-400 mr-2'
            />
            1. Master the Basics (HTML, CSS, JavaScript)
          </h2>
          <p>
            Even if you specialize in React or Next.js, the fundamentals must be
            solid:
          </p>
          <ul>
            <li>
              <Code
                aria-hidden='true'
                className='inline w-5 h-5 text-orange-400 mr-2'
              />
              <strong>HTML Semantics:</strong> Use tags like{' '}
              <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>,{' '}
              <code>&lt;header&gt;</code> correctly for accessibility (a11y) and
              SEO.
            </li>
            <li>
              <Palette
                aria-hidden='true'
                className='inline w-5 h-5 text-pink-400 mr-2'
              />
              <strong>CSS & Tailwind:</strong> Focus on flex, grid, responsive
              design, and Tailwind utilities.
            </li>
            <li>
              <Cpu
                aria-hidden='true'
                className='inline w-5 h-5 text-green-400 mr-2'
              />
              <strong>JavaScript ES6+:</strong> Learn destructuring, spread
              operators, async/await, and DOM manipulation.
            </li>
          </ul>

          <figure
            role='group'
            aria-labelledby='ex-html-caption'
            className='my-3'
          >
            <figcaption id='ex-html-caption' className='font-semibold mb-1'>
              Practical Example of Semantic HTML
            </figcaption>
            <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
              <code>{`<article>
  <header>
    <h1>My Blog Title</h1>
    <time datetime="2025-08-19">August 19, 2025</time>
  </header>
  <p>This is an example of semantic HTML.</p>
</article>`}</code>
            </pre>
          </figure>
        </section>

        <section
          id='frameworks'
          aria-labelledby='frameworks-heading'
          className='mb-8'
        >
          <h2 id='frameworks-heading' className={contentStyle.h2}>
            <Layers
              aria-hidden='true'
              className='inline w-6 h-6 text-purple-400 mr-2'
            />
            2. Learn a Modern Framework Deeply (React, Next.js, Vue/Angular)
          </h2>
          <p>
            Most companies now use React or Next.js for modern projects. Key
            skills:
          </p>
          <ul>
            <li>
              <Code
                aria-hidden='true'
                className='inline w-5 h-5 text-cyan-400 mr-2'
              />
              <strong>React:</strong> Hooks (useState, useEffect), Context,
              Custom Hooks.
            </li>
            <li>
              <Rocket
                aria-hidden='true'
                className='inline w-5 h-5 text-indigo-400 mr-2'
              />
              <strong>Next.js:</strong> SSR, Static Generation, API routes.
            </li>
            <li>
              <Settings
                aria-hidden='true'
                className='inline w-5 h-5 text-emerald-400 mr-2'
              />
              <strong>State Management:</strong> Zustand, Redux, or React Query.
            </li>
          </ul>

          <figure
            role='group'
            aria-labelledby='ex-react-caption'
            className='my-3'
          >
            <figcaption id='ex-react-caption' className='font-semibold mb-1'>
              React Hook Example
            </figcaption>
            <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
              <code>{`import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`}</code>
            </pre>
          </figure>
        </section>

        <section id='design' aria-labelledby='design-heading' className='mb-8'>
          <h2 id='design-heading' className={contentStyle.h2}>
            <Palette
              aria-hidden='true'
              className='inline w-6 h-6 text-pink-400 mr-2'
            />
            3. Improve UI/UX and Design Skills
          </h2>
          <ul>
            <li>
              Design simple, attractive interfaces with spacing, typography, and
              colors.
            </li>
            <li>
              Use design tools like Figma or Adobe XD to create wireframes
              before development.
            </li>
            <li>
              Focus on{' '}
              <strong>dark mode, accessibility, and responsiveness</strong>.
            </li>
          </ul>
          <p>
            <strong>Tip:</strong> Every component should be reusable, modular,
            and user-friendly.
          </p>
        </section>

        <section id='tools' aria-labelledby='tools-heading' className='mb-8'>
          <h2 id='tools-heading' className={contentStyle.h2}>
            <Zap
              aria-hidden='true'
              className='inline w-6 h-6 text-yellow-400 mr-2'
            />
            4. Modern Development Tools
          </h2>
          <ul>
            <li>VSCode with plugins like Prettier and ESLint.</li>
            <li>
              Browser DevTools for debugging JavaScript, CSS, and performance.
            </li>
            <li>Vite / Next.js for fast development with Hot Reload.</li>
            <li>Framer Motion / TailwindCSS Animate for smooth animations.</li>
          </ul>
        </section>

        <section
          id='performance'
          aria-labelledby='performance-heading'
          className='mb-8'
        >
          <h2 id='performance-heading' className={contentStyle.h2}>
            <Rocket
              aria-hidden='true'
              className='inline w-6 h-6 text-red-400 mr-2'
            />
            5. Optimize Performance
          </h2>
          <ul>
            <li>Lazy-load images and components.</li>
            <li>
              Use <strong>Code Splitting</strong> and Dynamic Imports.
            </li>
            <li>Reduce re-renders with React.memo and useCallback.</li>
            <li>
              Use Next.js <code>&lt;Image /&gt;</code> for optimization.
            </li>
          </ul>
        </section>

        <section
          id='learning'
          aria-labelledby='learning-heading'
          className='mb-8'
        >
          <h2 id='learning-heading' className={contentStyle.h2}>
            <BookOpen
              aria-hidden='true'
              className='inline w-6 h-6 text-sky-400 mr-2'
            />
            6. Adopt a Continuous Learning Mindset
          </h2>
          <ul>
            <li>Read blogs and documentation regularly.</li>
            <li>Follow the latest updates in React, Tailwind, and Next.js.</li>
            <li>Join small open-source projects to apply your skills.</li>
            <li>
              Learn debugging and problem-solving instead of relying on
              copy-paste.
            </li>
          </ul>
        </section>

        {/* Quote */}
        <blockquote>
          <Quote
            aria-hidden='true'
            className='inline w-5 h-5 text-sky-400 mr-2'
          />
          "The best way to become a professional Frontend developer is to
          combine practical learning with real projects and keep up with the
          latest trends every day."
        </blockquote>
      </article>
    );
  },
  BlogContent_2: () => {
    return (
      <article
        className='prose prose-invert max-w-none leading-relaxed'
        itemScope
        itemType='https://schema.org/Article'
      >
        <p itemProp='description'>
          Hoisting is JavaScript's <strong>compile-time behavior</strong> where
          declarations are processed before execution. Think of it as:
          identifiers are created at the top of their scope, while assignments
          stay where you wrote them.
        </p>

        <section aria-labelledby='hoisted-heading' className='my-8'>
          <h2 id='hoisted-heading' className={contentStyle.h2}>
            <ArrowUp
              aria-hidden='true'
              className='inline w-6 h-6 text-green-400 mr-2'
            />
            What Actually Gets Hoisted?
          </h2>
          <ul>
            <li>
              <Code
                aria-hidden='true'
                className='inline w-5 h-5 text-blue-400 mr-2'
              />
              <code>var</code> → hoisted and initialized to{' '}
              <code>undefined</code>.
            </li>
            <li>
              <FileCode2
                aria-hidden='true'
                className='inline w-5 h-5 text-purple-400 mr-2'
              />
              Function declarations → hoisted with their definitions (can be
              called earlier).
            </li>
            <li>
              <AlertTriangle
                aria-hidden='true'
                className='inline w-5 h-5 text-yellow-400 mr-2'
              />
              <code>let</code> / <code>const</code> / <code>class</code> →
              hoisted but not initialized (TDZ).
            </li>
            <li>
              <Code
                aria-hidden='true'
                className='inline w-5 h-5 text-cyan-400 mr-2'
              />
              Function expressions / arrow functions → not hoisted as functions;
              only the variable is hoisted.
            </li>
          </ul>
        </section>

        <section aria-labelledby='examples-heading' className='mb-8'>
          <h2 id='examples-heading' className={contentStyle.h2}>
            <FileCode2
              aria-hidden='true'
              className='inline w-6 h-6 text-indigo-400 mr-2'
            />
            Examples
          </h2>

          <figure className='mb-4'>
            <figcaption className='font-semibold mb-1'>
              # Example_1: var and undefined
            </figcaption>
            <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
              <code>{`console.log(a); // undefined
var a = 10;
console.log(a); // 10`}</code>
            </pre>
          </figure>

          <figure className='mb-4'>
            <figcaption className='font-semibold mb-1'>
              # Example_2: Function declaration
            </figcaption>
            <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
              <code>{`greet(); // "Hello"
function greet() {
  console.log("Hello");
}`}</code>
            </pre>
          </figure>

          <figure className='mb-4'>
            <figcaption className='font-semibold mb-1'>
              # Example_3: Function expression with var
            </figcaption>
            <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
              <code>{`shout(); // ❌ TypeError: shout is not a function
var shout = function() {
  console.log("Hi");
};`}</code>
            </pre>
          </figure>

          <figure className='mb-4'>
            <figcaption className='font-semibold mb-1'>
              # Example_4: Function expression with let / const
            </figcaption>
            <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
              <code>{`whisper(); // ❌ ReferenceError (TDZ)
let whisper = function() {
  console.log("psst");
};`}</code>
            </pre>
          </figure>

          <figure className='mb-4'>
            <figcaption className='font-semibold mb-1'>
              # Example_5: let / const and TDZ
            </figcaption>
            <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
              <code>{`console.log(b); // ❌ ReferenceError
let b = 3;

console.log(c); // ❌ ReferenceError
const c = 7;`}</code>
            </pre>
          </figure>

          <figure className='mb-4'>
            <figcaption className='font-semibold mb-1'>
              # Example_6: typeof with TDZ
            </figcaption>
            <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
              <code>{`console.log(typeof u); // "undefined" (undeclared)
console.log(typeof t); // ❌ ReferenceError (t is in TDZ)
let t = 1;`}</code>
            </pre>
          </figure>

          <figure className='mb-4'>
            <figcaption className='font-semibold mb-1'>
              # Example_7: class and TDZ
            </figcaption>
            <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
              <code>{`new Person(); // ❌ ReferenceError
class Person {}`}</code>
            </pre>
          </figure>

          <figure className='mb-4'>
            <figcaption className='font-semibold mb-1'>
              # Example_8: var shadowing
            </figcaption>
            <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
              <code>{`var v = 1;
function test() {
  console.log(v); // undefined (local var v is hoisted)
  var v = 2;
  console.log(v); // 2
  }
  test();`}</code>
            </pre>
          </figure>
        </section>

        <section aria-labelledby='pitfalls-heading' className='mb-8'>
          <h2 id='pitfalls-heading' className={contentStyle.h2}>
            <AlertTriangle
              aria-hidden='true'
              className='inline w-6 h-6 text-red-400 mr-2'
            />
            Common Pitfalls & Fixes
          </h2>
          <ul>
            <li>
              <Lightbulb
                aria-hidden='true'
                className='inline w-5 h-5 text-yellow-300 mr-2'
              />
              Calling a function expression before its assignment →
              Type/ReferenceError.
            </li>
            <li>
              <Lightbulb
                aria-hidden='true'
                className='inline w-5 h-5 text-yellow-300 mr-2'
              />
              Accessing <code>let</code> / <code>const</code> /{' '}
              <code>class</code> before declaration → ReferenceError (TDZ).
            </li>
          </ul>
        </section>

        <section aria-labelledby='best-practices-heading' className='mb-8'>
          <h3 id='best-practices-heading'>
            <CheckCircle2
              aria-hidden='true'
              className='inline w-6 h-6 text-emerald-400 mr-2'
            />
            Best Practices
          </h3>
          <ol>
            <li>
              Prefer <code>const</code>, then <code>let</code>; avoid{' '}
              <code>var</code> in modern code.
            </li>
            <li>
              Always declare before use; group constants/imports at the top.
            </li>
            <li>
              Enable ESLint rules: <code>no-use-before-define</code>,{' '}
              <code>no-var</code>, <code>prefer-const</code>.
            </li>
          </ol>
        </section>

        <blockquote>
          <Quote
            aria-hidden='true'
            className='inline w-5 h-5 text-sky-400 mr-2'
          />
          "Relying on hoisting makes code harder to read. Declare before using,
          and your code will be cleaner and safer."
        </blockquote>
      </article>
    );
  },
  BlogContent_3: () => {
    return (
      <article
        className='prose prose-invert max-w-none leading-relaxed'
        itemScope
        itemType='https://schema.org/Article'
      >
        <p itemProp='description'>
          A complete step-by-step guide to learning React.js, from the core
          concepts to advanced techniques, and building modern, interactive web
          applications. React, developed by Facebook, is one of the most popular
          JavaScript libraries for building fast, interactive, and scalable user
          interfaces. It follows a component-based architecture, making code
          more reusable and easier to maintain. React is widely used for
          creating single-page applications (SPAs), and its virtual DOM ensures
          efficient rendering and smooth user experiences.
        </p>
        <LoadingSection />
      </article>
    );
  },
  BlogContent_4: () => {
    return (
      <article
        className='prose prose-invert max-w-none leading-relaxed'
        itemScope
        itemType='https://schema.org/Article'
      >
        <p itemProp='description'>
          A comprehensive introduction to JavaScript, covering essential
          concepts, syntax, and best practices for beginners. Start your coding
          journey here!
        </p>
        <section
          aria-labelledby='variablesFundamentals-heading'
          className='my-8'
        >
          <div>
            {' '}
            <h2 id='variablesFundamentals-heading' className={contentStyle.h2}>
              1) Understanding <code>var</code>, <code>let</code>, and{' '}
              <code>const</code> in JavaScript
            </h2>
            <p>
              Variables are the foundation of JavaScript programming. In this
              guide, we'll explore <strong>var</strong>, <strong>let</strong>,
              and <strong>const</strong>, their <em>scope</em>,{' '}
              <em>behavior</em>, and <em>best practices</em>. By the end, you'll
              know exactly when and why to use each one.
            </p>
          </div>
          {/* VAR */}
          <section
            aria-labelledby='var-section'
            className='mt-5 mb-2 scroll-mt-24'
          >
            <div className='mb-3 flex items-center gap-3'>
              <KeyRound
                className='h-6 w-6 text-violet-400'
                aria-hidden='true'
              />
              <h3 id='var-section' className='text-lg font-semibold'>
                <code className='rounded bg-zinc-800 px-2 py-1'>var</code> —
                Function & Global Scope
              </h3>
            </div>
            <p className='text-zinc-300'>
              The <code className='rounded bg-zinc-800 px-1'>var</code> keyword
              has
              <strong> function-level</strong> and{' '}
              <strong> global-level</strong> scope. Declared globally, it's
              available anywhere; inside a function, it's limited to that
              function.
            </p>

            <figure className='mb-4'>
              <figcaption className='mb-1 mt-2 flex items-center gap-1'>
                <Lightbulb
                  className='h-4 w-4 text-yellow-400'
                  aria-hidden='true'
                />
                <h4 className='text-base font-medium'>Example</h4>
              </figcaption>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto'
                aria-label='JavaScript example for var'
              >
                <code>
                  {`// Global scope
var a = 5;

function fun() {
var b = 4;
console.log(a); // ✅ prints 5
console.log(b); // ✅ prints 4
}
fun();

console.log(a); // ✅ prints 5
console.log(b); // ❌ ReferenceError (b is not defined outside the function)`}
                </code>
              </pre>
            </figure>

            <ul className='mt-4 space-y-2'>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-emerald-400' />
                <span>Works globally if declared outside functions.</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-emerald-400' />
                <span>Function-scoped if declared inside a function.</span>
              </li>
              <li className='flex items-start gap-2'>
                <AlertTriangle className='mt-0.5 h-5 w-5 shrink-0 text-amber-400' />
                <span>
                  Does <strong>not</strong> respect block scope (e.g., inside{' '}
                  <code>if</code> or <code>for</code>).
                </span>
              </li>
            </ul>
          </section>
          <hr className='my-4 border-slate-700' />

          {/* LET */}
          <section
            aria-labelledby='let-section'
            className='mt-5 mb-2 scroll-mt-24'
          >
            <div className='mb-3 flex items-center gap-3'>
              <Braces className='h-6 w-6 text-fuchsia-400' aria-hidden='true' />
              <h3 id='let-section' className='text-lg font-semibold'>
                <code className='rounded bg-zinc-800 px-2 py-1'>let</code> —
                Block Scope
              </h3>
            </div>
            <p className='text-zinc-300'>
              <code className='rounded bg-zinc-800 px-1'>let</code> introduces
              <strong> block-level scope</strong>. A variable exists only inside
              the surrounding <code>{'{}'}</code> where it is defined.
            </p>
            <figure className='mb-4'>
              <figcaption className='mb-1 mt-2 flex items-center gap-1'>
                <Lightbulb
                  className='h-4 w-4 text-yellow-400'
                  aria-hidden='true'
                />
                <h4 className='text-base font-medium'>Example</h4>
              </figcaption>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto'
                aria-label='JavaScript example for var'
              >
                <code>
                  {`var a = 5;

if (a > 1) {
var b = 6; // function/global scoped
let c = 7; // block scoped
}

console.log(a); // ✅ prints 5
console.log(b); // ✅ prints 6 (because var is not block-scoped)
console.log(c); // ❌ ReferenceError (c only exists inside the if block)`}
                </code>
              </pre>
            </figure>

            <ul className='mt-4 space-y-2'>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-emerald-400' />
                <span>
                  Safer than <code>var</code> because it respects block
                  boundaries.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-emerald-400' />
                <span>
                  Preferred in loops (<code>for</code>, <code>while</code>) to
                  avoid leaks.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <AlertTriangle className='mt-0.5 h-5 w-5 shrink-0 text-amber-400' />
                <span>Cannot be redeclared in the same block.</span>
              </li>
            </ul>
          </section>
          <hr className='my-4 border-slate-700' />

          {/* CONST */}
          <section
            aria-labelledby='const-section'
            className='mt-5 mb-2 scroll-mt-24'
          >
            <div className='mb-3 flex items-center gap-3'>
              <Lock className='h-6 w-6 text-sky-400' aria-hidden='true' />
              <h3 id='const-section' className='text-lg font-semibold'>
                <code className='rounded bg-zinc-800 px-2 py-1'>const</code> —
                Constants & Immutability
              </h3>
            </div>
            <p className='text-zinc-300'>
              <code className='rounded bg-zinc-800 px-1'>const</code> declares
              <strong> constants</strong>. The variable reference cannot be
              reassigned. Objects and arrays remain <em>mutable</em> (their
              contents can change), but the reference stays the same.
            </p>

            <figure className='mb-4'>
              <figcaption className='mb-1 mt-2 flex items-center gap-1'>
                <Lightbulb
                  className='h-4 w-4 text-yellow-400'
                  aria-hidden='true'
                />
                <h4 className='text-base font-medium'>Example</h4>
              </figcaption>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto'
                aria-label='JavaScript example for var'
              >
                <code>
                  {`// Constant primitive value
const x = 5;
x = 6; // ❌ TypeError: Assignment to constant variable

// Objects with const
const obj = { name: 'Ali', age: 21 };
obj.name = 'Omar';
console.log(obj); // ✅ { name: 'Omar', age: 21 }

// Arrays with const
const arr = [1, 2, 3];
arr[1] = 4;
console.log(arr); // ✅ [1, 4, 3]`}
                </code>
              </pre>
            </figure>

            <ul className='mt-4 space-y-2'>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-emerald-400' />
                <span>
                  Guarantees the <em>reference</em> will not change.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-emerald-400' />
                <span>
                  Ideal for constants, configs, and function expressions.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <AlertTriangle className='mt-0.5 h-5 w-5 shrink-0 text-amber-400' />
                <span>
                  Objects/arrays remain mutable — only the binding is constant.
                </span>
              </li>
            </ul>
          </section>
          <hr className='my-4 border-slate-700' />

          {/* Best Practices */}
          <section
            aria-labelledby='best-practices'
            className='mt-5 mb-2 scroll-mt-24'
          >
            <div className='mb-3 flex items-center gap-3'>
              <Lightbulb
                className='h-6 w-6 text-yellow-300'
                aria-hidden='true'
              />
              <h3 id='best-practices' className='text-lg font-semibold'>
                Best Practices
              </h3>
            </div>
            <ul className='space-y-2 text-base'>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-emerald-400' />
                <span>
                  Prefer <code className='rounded bg-zinc-800 px-1'>const</code>{' '}
                  by default.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-emerald-400' />
                <span>
                  Use <code className='rounded bg-zinc-800 px-1'>let</code> when
                  reassignment is required.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <AlertTriangle className='mt-0.5 h-5 w-5 shrink-0 text-amber-400' />
                <span>
                  Avoid <code className='rounded bg-zinc-800 px-1'>var</code>{' '}
                  unless maintaining legacy code.
                </span>
              </li>
            </ul>
          </section>

          <footer className='mt-8 rounded-xl border border-white/10 bg-zinc-900/60 p-4 text-sm text-zinc-300'>
            📝 <span className='sr-only'>Summary:</span> Use{' '}
            <strong>const</strong> for constants,
            <strong> let</strong> for reassignable values, and avoid{' '}
            <strong>var</strong> unless you have a specific reason.
          </footer>
        </section>
      </article>
    );
  },
  BlogContent_5: () => {
    return (
      <article
        dir='rtl'
        className='prose prose-invert max-w-none leading-relaxed text-right'
        itemScope
        itemType='https://schema.org/Article'
      >
        <p itemProp='description'>
          إتقان التعامل مع <span dir='ltr'>APIs</span> من المهارات الأساسية لأي
          مبرمج. سواء كنت بتطور موقع شخصي بسيط أو شغال على مشروع كبير، هتلاقي
          نفسك محتاج تجيب بيانات من مصادر خارجية. معرفتك إزاي تعمل ده بشكل صحيح
          بتوضح إنك قادر تشتغل على مشاريع حقيقية وتندمج بسهولة مع فريق العمل.
        </p>

        <p>
          المقال ده موجه للمبتدئين وخصوصًا الناس اللي لسه دخلة على{' '}
          <span dir='ltr'>React</span>. هنمشي خطوة بخطوة في شرح إزاي تسحب بيانات
          من <span dir='ltr'>API</span> وتخزنها وتعرضها داخل تطبيقك، من غير ما
          تحتاج خبرة متقدمة. الهدف إنك تفهم الأساسيات وتاخد ثقة إنك تقدر تبني
          حاجات عملية بنفسك.
        </p>

        <p>
          في التجربة دي هنستخدم <span dir='ltr'>React</span> مع{' '}
          <span dir='ltr'>Vite</span>، ومعاهم{' '}
          <span dir='ltr'>Tailwind CSS</span> للتصميم. هنبدأ الأول بالـ{' '}
          <span dir='ltr'>fetch</span> العادي، وبعدها نعدل الكود ونستخدم مكتبة{' '}
          <span dir='ltr'>Axios</span> اللي بتخلي عملية التعامل مع الطلبات أسهل
          وأوضح.
        </p>
        <hr className='my-4 border-slate-700' />

        {/* Prerequisites */}
        <section
          dir='rtl'
          className='prose prose-invert max-w-none text-right leading-relaxed'
          itemScope
          itemType='https://schema.org/HowToSection'
        >
          <h2
            className='text-2xl font-bold mb-4 flex items-center'
            itemProp='name'
          >
            <ScrollText
              aria-hidden='true'
              className='inline w-6 h-6 text-yellow-900 ml-2'
            />
            المتطلبات الأساسية:
          </h2>
          <p className='mb-6 text-slate-300' itemProp='description'>
            قبل ما تبدأ في متابعة الشرح، يفضل يكون عندك خلفية بسيطة عن بعض
            المفاهيم الأساسية عشان التجربة تكون أسهل وأكثر وضوحًا:
          </p>
          <ul className='space-y-3 list-none pl-0 text-slate-300'>
            <li className='flex items-start gap-2' itemProp='step'>
              <CheckCircle className='w-5 h-5 text-green-400 mt-1' />
              <span>
                معرفة أساسيات <span dir='ltr'>React</span> زي المكوّنات
                <span dir='ltr'> (components) </span> واستخدام{' '}
                <code dir='ltr' className='rounded bg-zinc-800 px-1'>
                  useState
                </code>
                .
              </span>
            </li>
            <li className='flex items-start gap-2' itemProp='step'>
              <CheckCircle className='w-5 h-5 text-green-400 mt-1' />
              <span>
                تكون عارف يعني إيه <span dir='ltr'>API</span> وإزاي بيرجع بيانات
                غالبًا بتكون بصيغة <span dir='ltr'>JSON</span>.
              </span>
            </li>
            <li className='flex items-start gap-2' itemProp='step'>
              <CheckCircle className='w-5 h-5 text-green-400 mt-1' />
              <span>
                خبرة بسيطة مع <span dir='ltr'>JavaScript promises</span> وطريقة
                التعامل معاها باستخدام{' '}
                <code dir='ltr' className='rounded bg-zinc-800 px-1'>
                  .then()
                </code>{' '}
                (يكفي تكون شفتها أو استخدمتها مرة قبل كده).
              </span>
            </li>
            <li className='flex items-start gap-2' itemProp='step'>
              <CheckCircle className='w-5 h-5 text-green-400 mt-1' />
              <span>
                تكون مرتاح في استخدام{' '}
                <code dir='ltr' className='rounded bg-zinc-800 px-1'>
                  map()
                </code>{' '}
                لعرض القوائم المأخوذة من مصفوفات، لأننا هنستخدمها لعرض البيانات
                اللي هتيجي من ال
                <span dir='ltr'> API</span>.
              </span>
            </li>
            <li className='flex items-start gap-2' itemProp='step'>
              <CheckCircle className='w-5 h-5 text-green-400 mt-1' />
              <span>
                معرفة إزاي تشغّل مشروع <span dir='ltr'>React</span> باستخدام
                أدوات زي <span dir='ltr'>Vite</span> أو{' '}
                <span dir='ltr'>Next.js</span> أو <span dir='ltr'>Remix</span>.
              </span>
            </li>
          </ul>
        </section>
        <hr className='my-4 border-slate-700' />

        {/* API Definition */}
        <section
          dir='rtl'
          className='prose prose-invert max-w-none text-right leading-relaxed'
          itemScope
          itemType='https://schema.org/Article'
        >
          <h2
            className='text-2xl font-bold mb-4 flex items-center gap-2'
            itemProp='headline'
          >
            <Network className='w-6 h-6 text-blue-400' aria-hidden='true' />
            ما هو الـ API ولماذا نحتاجه؟
          </h2>
          <p className='mb-4 text-slate-300' itemProp='description'>
            الـ <span dir='ltr'>API (Application Programming Interface)</span>{' '}
            هو ببساطة حلقة الوصل بين نظامين مختلفين عشان يقدروا يتبادلوا
            البيانات بسهولة. تقدر تتخيله زي "النادل" في مطعم: إنت بتطلب منه طبق
            معين (الطلب/Request)، هو بياخده للمطبخ (الخادم/Server)، وبعدها
            بيرجعلك الطبق الجاهز (الاستجابة/Response).
          </p>

          <p className='mb-4 text-slate-300'>
            في عالم تطوير الويب، الـ <span dir='ltr'>API</span> بيخلي تطبيق
            <span dir='ltr'> Frontend </span> (زي React) يقدر يتواصل مع خدمة
            <span dir='ltr'>Backend </span>. أغلب الوقت التواصل ده بيتم عن طريق
            <span dir='ltr'> HTTP requests </span> لروابط معينة اسمها{' '}
            <span dir='ltr'>Endpoints</span>. والرد غالبًا بيكون بملف بصيغة{' '}
            <span dir='ltr'>JSON</span> (اختصار{' '}
            <span dir='ltr'>JavaScript Object Notation</span>) اللي هو خفيف وسهل
            القراءة والتعامل معاه في جافاسكربت.
          </p>

          <figure className='mb-3'>
            <figcaption className='mb-1 mt-2 flex items-center gap-1'>
              <Lightbulb
                className='h-4 w-4 text-green-400'
                aria-hidden='true'
              />
              <h3 className='text-base font-medium'>مثال عملي</h3>
            </figcaption>
            <pre
              className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
              aria-label='JavaScript example for var'
              dir='ltr'
            >
              <code>{`GET https://jsonplaceholder.typicode.com/users`}</code>
            </pre>
          </figure>

          <p className='mb-2 text-slate-300'>
            الكود فوق عبارة عن طلب{' '}
            <code dir='ltr' className='rounded bg-zinc-800 px-1'>
              GET
            </code>{' '}
            بيطلب قائمة مستخدمين من السيرفر. الرد هيكون شبيه بالآتي:
          </p>

          <pre
            className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
            aria-label='JavaScript example for var'
            dir='ltr'
          >
            <code>
              {`[
  {
    "id": 1,
    "name": "أحمد محمد",
    "email": "ahmed@example.com"
  },
  {
    "id": 2,
    "name": "سارة علي",
    "email": "sara@example.com"
  }
]`}
            </code>
          </pre>

          <h3 className='text-xl font-semibold mt-6 mb-3 flex items-center gap-2'>
            <Server className='w-5 h-5 text-yellow-400' aria-hidden='true' />
            دورة عمل الـ API
          </h3>

          <ol className='list-decimal list-inside space-y-1 text-slate-300'>
            <li className='flex items-center gap-2'>
              <ArrowLeft className='w-4 h-4 text-blue-300' />
              إرسال الطلب (Request) من التطبيق بتاعك.
            </li>
            <li className='flex items-center gap-2'>
              <ArrowLeft className='w-4 h-4 text-blue-300' />
              انتظار رد السيرفر (Response).
            </li>
            <li className='flex items-center gap-2'>
              <ArrowLeft className='w-4 h-4 text-blue-300' />
              تحليل بيانات <span dir='ltr'>JSON</span>.
            </li>
            <li className='flex items-center gap-2'>
              <ArrowLeft className='w-4 h-4 text-blue-300' />
              استخدام البيانات لعرضها في واجهة المستخدم (UI).
            </li>
          </ol>

          <p className='mt-6 text-slate-300'>
            فهم الـ <span dir='ltr'>API</span> والتعامل مع{' '}
            <span dir='ltr'>JSON</span> مهارة أساسية لأي مطور. هتحتاجها عشان
            تعرض بروفايلات المستخدمين، تبعت بيانات فورمات، تحدث لوحات التحكم،
            تعمل بحث في قواعد البيانات، وغيرهم كتير. ببساطة: لو عايز تبني تطبيق
            عملي وحقيقي، مش هتعرف تستغنى عن الـ <span dir='ltr'>APIs</span>.
          </p>
        </section>
        <hr className='my-4 border-slate-700' />

        {/* Types of APIs */}
        <section
          dir='rtl'
          className='prose prose-invert max-w-none text-right leading-relaxed'
          itemScope
          itemType='https://schema.org/Article'
        >
          {' '}
          <h2
            className='text-2xl font-bold mb-4 flex items-center gap-2'
            itemProp='headline'
          >
            <Info className='w-6 h-6 text-blue-400' aria-hidden='true' />
            أنواع الـ APIs اللي ممكن تقابلك:
          </h2>
          <p className='mb-6 text-slate-300' itemProp='description'>
            مش كل الـ <span dir='ltr'>APIs</span> شبه بعض. فهم الأنواع المختلفة
            بيساعدك تحدد الأدوات والخطوات اللي هتحتاجها عشان تشتغل بيها بشكل
            صحيح.
          </p>
          {/* النوع الأول */}
          <article itemScope itemType='https://schema.org/TechArticle'>
            <h3 className='text-xl font-semibold mb-2 flex items-center gap-2'>
              <Globe className='w-5 h-5 text-green-400' aria-hidden='true' />
              1. واجهات برمجية عامة بدون مفتاح (Public APIs - No Key)
            </h3>
            <p className='text-slate-300'>
              النوع ده مفتوح للجميع، مش محتاج تسجيل أو مصادقة. مناسب جدًا
              للتجارب، التعلم، وبناء تطبيقات تجريبية.
            </p>
            <figure className='mb-2 mt-4'>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
                aria-label='JavaScript example for var'
                dir='ltr'
              >
                <code>{`GET https://jsonplaceholder.typicode.com/users`}</code>
              </pre>
              <figcaption className='mb-1 mt-2 flex items-center gap-1 text-slate-300'>
                <p>ده مثال على API مجاني بيرجع بيانات مستخدمين وهمية.</p>
              </figcaption>
            </figure>
          </article>
          {/* النوع الثاني */}
          <article
            itemScope
            itemType='https://schema.org/TechArticle'
            className='my-7'
          >
            <h3 className='text-xl font-semibold mb-2 flex items-center gap-2'>
              <KeyRound
                className='w-5 h-5 text-yellow-400'
                aria-hidden='true'
              />
              2. واجهات عامة مع مفتاح (Public APIs with Key)
            </h3>
            <p className='text-slate-300'>
              بعض الـ APIs متاحة للجميع برضه، لكن بيطلبوا منك مفتاح شخصي{' '}
              <span dir='ltr'>(API Key)</span> عشان يراقبوا الاستخدام ويمنعوا
              الاستغلال.
            </p>
            <figure className='mb-2 mt-4'>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
                aria-label='JavaScript example for var'
                dir='ltr'
              >
                <code>
                  {' '}
                  {`GET https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`}
                </code>
              </pre>
              <figcaption className='mb-1 mt-2 flex items-center gap-1 text-slate-300'>
                <p>ده مثال على API مجاني بيرجع بيانات مستخدمين وهمية.</p>
              </figcaption>
            </figure>
            <ul className='space-y-1 text-slate-300'>
              <li className="flex items-center gap-2 before:content-['•'] before:text-slate-500 before:text-2xl before:mr-2">
                <span dir='ltr'>https://newsapi.org/v2/top-headlines</span>
                <ArrowLeft className='w-4 h-4' aria-hidden='true' /> رابط الـ
                API الأساسي.
              </li>
              <li className="flex items-center gap-2 before:content-['•'] before:text-slate-500 before:text-2xl before:mr-2">
                <span dir='ltr'>country=us</span>{' '}
                <ArrowLeft className='w-4 h-4' aria-hidden='true' /> باراميتر
                بيحدد نوع الأخبار (هنا: أخبار أمريكا).
              </li>
              <li className="flex items-center gap-2 before:content-['•'] before:text-slate-500 before:text-2xl before:mr-2">
                <span dir='ltr'>apiKey=YOUR_API_KEY</span>{' '}
                <ArrowLeft className='w-4 h-4' aria-hidden='true' /> مفتاحك
              </li>
            </ul>
            <p className='mt-2 flex items-center gap-1 text-slate-300'>
              الخطوات: تسجّل{' '}
              <ArrowLeft className='w-3 h-3' aria-hidden='true' /> تاخد المفتاح{' '}
              <ArrowLeft className='w-3 h-3' aria-hidden='true' /> تخزنه بشكل
              آمن <ArrowLeft className='w-3 h-3' aria-hidden='true' /> تستخدمه
              في الطلب.
            </p>
          </article>
          {/* النوع الثالث */}
          <article
            itemScope
            itemType='https://schema.org/TechArticle'
            className='mb-7'
          >
            <h3 className='text-xl font-semibold mb-2 flex items-center gap-2'>
              <Lock className='w-5 h-5 text-red-400' aria-hidden='true' />
              3. الـ APIs الخاصة (Private APIs)
            </h3>
            <p className='text-slate-300'>
              النوع ده بيكون مخصص للاستخدام الداخلي داخل الشركات. غالبًا بيحتاج
              طرق مصادقة متقدمة زي <span dir='ltr'>OAuth</span> أو{' '}
              <span dir='ltr'>session cookies</span>. عادة مش هتتعامل معاها إلا
              لو شغال جوة فريق أو على مشروع Backend.
            </p>
          </article>
          {/* النوع الرابع */}
          <article
            itemScope
            itemType='https://schema.org/TechArticle'
            className='mb-7'
          >
            <h3 className='text-xl font-semibold mb-2 flex items-center gap-2'>
              <ShieldCheck
                className='w-5 h-5 text-blue-400'
                aria-hidden='true'
              />
              4. المصادقة باستخدام Bearer Tokens
            </h3>
            <p className='text-slate-300'>
              في APIs حديثة، بدل ما تبعت <span dir='ltr'>API Key</span> في
              الرابط، بتحتاج تبعت <span dir='ltr'>Bearer Token</span> في ال{' '}
              <span dir='ltr'>headers</span>. زي مثلًا{' '}
              <span dir='ltr'>The Movie Database (TMDB)</span>.
            </p>
            <p>
              الميزة هنا إنها أكثر أمانًا، لأنها مش بتظهر في الـ URL أو تاريخ
              المتصفح. وبتتوافق مع معايير حديثة زي{' '}
              <span dir='ltr'>OAuth 2.0</span>.
            </p>{' '}
            <figure className='mb-2 mt-4'>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
                aria-label='JavaScript example for var'
                dir='ltr'
              >
                <code>
                  {`fetch("https://api.themoviedb.org/3/movie/popular", {
  headers: {
    Authorization: "Bearer YOUR_TOKEN_HERE"
  }
})`}
                </code>
              </pre>
              <figcaption className='mb-1 mt-2 flex items-center gap-1'>
                <p className='flex items-center text-sm text-gray-400'>
                  <MessageCircleWarning
                    className='w-5 h-5 text-red-700 ml-2'
                    aria-hidden='true'
                  />
                  <strong className='ml-1'>تذكير: </strong> دايمًا اقرأ توثيق
                  الـ API اللي بتستخدمه، لأن طريقة المصادقة ممكن تختلف من خدمة
                  للتانية.
                </p>
              </figcaption>
            </figure>
          </article>
        </section>
        <hr className='my-4 border-slate-700' />

        {/* Fetch Data with React */}
        <section
          dir='rtl'
          className='prose prose-invert max-w-none text-right leading-relaxed'
          itemScope
          itemType='https://schema.org/Article'
        >
          <h2
            className='text-2xl font-bold mb-4 flex items-center gap-2'
            itemProp='headline'
          >
            <ChevronsLeftRightEllipsis
              className='w-6 h-6 text-blue-400'
              aria-hidden='true'
            />
            ازاى تجيب بيانات من API في React باستخدام Fetch و Axios:
          </h2>
          <p className='mb-6 text-slate-300' itemProp='description'>
            واحدة من أهم الخطوات في أي تطبيق ويب حديث هي القدرة على التواصل مع
            الخوادم وجلب البيانات. سواء كنت بتعرض قائمة مستخدمين، أو بتنشيء لوحة
            تحكم، أو بتجيب نتائج بحث، لازم تفهم إزاي React بيتعامل مع البيانات
            اللي جاية من API.
          </p>
          {/* الأدوات الأساسية */}
          <section aria-labelledby='tools-title' className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <FileCode
                className='h-6 w-6 text-yellow-300'
                aria-hidden='true'
              />
              <h3 id='tools-title' className='text-lg font-semibold'>
                الأدوات والمفاهيم اللي هتحتاجها
              </h3>
            </div>

            <ul className='list-disc list-inside space-y-1 text-slate-300'>
              <li>
                <code className='rounded bg-zinc-800 px-1 text-slate-200'>
                  useState
                </code>{' '}
                لإدارة الحالة وتخزين البيانات اللي هتجيلك من الـ API.
              </li>
              <li>
                <code className='rounded bg-zinc-800 px-1 text-slate-200'>
                  useEffect
                </code>{' '}
                لتشغيل الأكواد بعد ما الكومبوننت يتعمله render، زي عملية جلب
                البيانات.
              </li>
              <li>
                <code className='rounded bg-zinc-800 px-1 text-slate-200'>
                  HTTP Requests
                </code>{' '}
                باستخدام{' '}
                <code className='rounded bg-zinc-800 px-1' dir='ltr'>
                  fetch()
                </code>{' '}
                أو مكتبة زي Axios.
              </li>
            </ul>
          </section>
          {/* خطوات عامة */}
          <section aria-labelledby='steps-title' className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <Footprints
                className='h-6 w-6 text-yellow-300'
                aria-hidden='true'
              />
              <h3 id='steps-title' className='text-lg font-semibold'>
                خطوات جلب البيانات في React
              </h3>
            </div>

            <ol className='list-decimal list-inside space-y-1 text-slate-300'>
              <li>
                تجهز{' '}
                <code className='rounded bg-zinc-800 px-1 text-slate-200'>
                  state
                </code>{' '}
                لتخزين البيانات.
              </li>
              <li>
                تستخدم{' '}
                <code
                  className='rounded bg-zinc-800 px-1 text-slate-200'
                  dir='ltr'
                >
                  useEffect()
                </code>{' '}
                عشان تنفذ الطلب أول ما يفتح الكومبوننت.
              </li>
              <li>تعرض حالة تحميل أو خطأ لو حصل مشكلة.</li>
              <li>تحط البيانات في الـ UI بعد ما توصل.</li>
            </ol>
          </section>
          {/* مثال fetch */}
          <section aria-labelledby='fetch-title' className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <Database
                className='h-6 w-6 text-yellow-300'
                aria-hidden='true'
              />
              <h3 id='fetch-title' className='text-lg font-semibold'>
                استخدام{' '}
                <code className='rounded bg-zinc-800 px-1' dir='ltr'>
                  fetch()
                </code>
              </h3>
            </div>

            <p className='text-slate-300'>
              <code
                className='rounded bg-zinc-800 px-1 text-slate-200'
                dir='ltr'
              >
                fetch()
              </code>{' '}
              ميزة موجودة أصلاً في المتصفح. بتسمحلك تبعت طلبات HTTP بدون مكتبات
              إضافية.
            </p>

            <figure className='mb-4'>
              <figcaption className='mb-1 mt-2 flex items-center gap-1'>
                <Lightbulb
                  className='h-4 w-4 text-green-400'
                  aria-hidden='true'
                />
                <h4 className='text-base font-medium'>مثال عملي:</h4>
              </figcaption>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
                aria-label='JavaScript example for var'
                dir='ltr'
              >
                <code>
                  {`import { useEffect, useState } from "react";

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
}

export default UsersWithFetch;`}
                </code>
              </pre>
            </figure>
          </section>
          {/* مثال axios */}
          <section aria-labelledby='axios-title' className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <Database
                className='h-6 w-6 text-yellow-300'
                aria-hidden='true'
              />
              <h3 id='axios-title' className='text-lg font-semibold'>
                استخدام Axios
              </h3>
            </div>

            <p className='text-slate-300'>
              <strong>Axios</strong> مكتبة قوية بتسهل شغل الطلبات. بتوفر حاجات
              زي تحويل الرد لـ JSON بشكل تلقائي، دعم للهيدرز، ومعالجة الأخطاء
              بشكل أوضح.
            </p>
            <figure className='mb-4'>
              <figcaption className='mb-1 mt-2 flex items-center gap-1'>
                <Lightbulb
                  className='h-4 w-4 text-green-400'
                  aria-hidden='true'
                />
                <h4 className='text-base font-medium'>مثال عملي:</h4>
              </figcaption>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
                aria-label='JavaScript example for var'
                dir='ltr'
              >
                <code>
                  {`import { useEffect, useState } from "react";
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
  if (error) return <p><AlertCircle className="inline w-4 h-4 text-red-500" /> {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
}

export default UsersWithAxios;`}
                </code>
              </pre>
            </figure>
          </section>

          {/* الخلاصة */}
          <section className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <Sparkles
                className='h-6 w-6 text-orange-400'
                aria-hidden='true'
              />
              <h3 className='text-lg font-semibold'>الخلاصة</h3>
            </div>

            <p className='text-slate-300'>
              دلوقتي بقى عندك فهم لطريقتين مهمين لجلب البيانات في React: الطريقة
              الأساسية باستخدام{' '}
              <code
                className='rounded bg-zinc-800 px-1 text-slate-200'
                dir='ltr'
              >
                fetch()
              </code>
              ، والطريقة المحترفة باستخدام
              <strong> Axios</strong>. في المشاريع الصغيرة تقدر تبدأ بـ
              <code
                className='rounded bg-zinc-800 px-1 text-slate-200'
                dir='ltr'
              >
                fetch()
              </code>
              ، لكن مع التطبيقات الكبيرة غالبًا هتلاقي إن Axios بيخلي الكود أنظف
              وأسهل في الصيانة.
            </p>
          </section>
        </section>
        <hr className='my-4 border-slate-700' />

        {/* Handle Loading and Error States */}
        <section
          dir='rtl'
          className='prose prose-invert max-w-none text-right leading-relaxed'
          itemScope
          itemType='https://schema.org/Article'
        >
          <h2
            className='text-2xl font-bold mb-4 flex items-center gap-2'
            itemProp='headline'
          >
            <Loader2
              className='w-6 h-6 animate-spin text-blue-400'
              aria-hidden='true'
            />
            <AlertTriangle
              className='w-6 h-6 text-red-500'
              aria-hidden='true'
            />
            إدارة حالات التحميل والأخطاء عند جلب البيانات في React:
          </h2>
          <p className='mb-6 text-slate-300' itemProp='description'>
            في أي تطبيق بيتعامل مع APIs، مش دايمًا كل حاجة هتمشي زي ما متوقع.
            أحيانًا البيانات بتتأخر، وأحيانًا تانية الطلب ممكن يفشل. هنا بيجي
            دور
            <strong>حالات التحميل (Loading)</strong> و
            <strong>حالات الخطأ (Error)</strong> اللي بتخلي التطبيق أوضح وأسهل
            للمستخدم، وكمان بتساعد المطور يعرف المشكلة بسرعة.
          </p>
          {/* حالة التحميل */}
          <section aria-labelledby='loading-state' className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <Loader2
                className='w-4 h-4 animate-spin text-blue-400'
                aria-hidden='true'
              />
              <h3 id='fetch-title' className='text-lg font-semibold'>
                يعني إيه حالة تحميل؟
              </h3>
            </div>
            <p className='text-slate-300'>
              حالة التحميل بتظهر لما التطبيق بيكون لسه بيستنى البيانات من
              الخادم. لو ما عرضناش حاجة في الوقت ده، المستخدم هيحس إن الصفحة مش
              شغالة. غالبًا بنستخدم{' '}
              <code
                className='rounded bg-zinc-800 px-1 text-slate-200'
                dir='ltr'
              >
                boolean
              </code>{' '}
              عشان نتابع إذا البيانات وصلت ولا لأ.
            </p>
            <figure className='mb-4'>
              <figcaption className='mb-1 mt-2 flex items-center gap-1'>
                <Lightbulb
                  className='h-4 w-4 text-green-400'
                  aria-hidden='true'
                />
                <h4 className='text-base font-medium'>مثال عملي:</h4>
              </figcaption>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
                aria-label='JavaScript example for var'
                dir='ltr'
              >
                <code>
                  {`const [loading, setLoading] = useState(true);

if (loading) {
  return <p>جاري تحميل البيانات...</p>;
}`}
                </code>
              </pre>
            </figure>
          </section>

          {/* حالة الخطأ */}
          <section aria-labelledby='error-state' className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <AlertTriangle
                className='w-4 h-4 text-red-500'
                aria-hidden='true'
              />
              <h3 id='fetch-title' className='text-lg font-semibold'>
                يعني إيه حالة خطأ؟
              </h3>
            </div>
            <p className='text-slate-300'>أوقات الطلب بيفشل بسبب مشاكل زي:</p>
            <ul className='list-disc list-inside space-y-1 text-slate-300'>
              <li>رابط الـ API غلط.</li>
              <li>الخادم (server) مش شغال أو واقع.</li>
              <li>انتهت صلاحية الـ Token أو مفتاح الـ API.</li>
            </ul>
            <p className='text-slate-300'>
              في الحالات دي، لازم نعرض رسالة واضحة للمستخدم، ونخلي المطور يعرف
              إيه اللي حصل عشان يقدر يصلح المشكلة.
            </p>
            <figure className='mb-4'>
              <figcaption className='mb-1 mt-2 flex items-center gap-1'>
                <Lightbulb
                  className='h-4 w-4 text-green-400'
                  aria-hidden='true'
                />
                <h4 className='text-base font-medium'>مثال عملي:</h4>
              </figcaption>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
                aria-label='JavaScript example for var'
                dir='ltr'
              >
                <code>
                  {`const [error, setError] = useState(null);

if (error) {
  return <p>حدث خطأ: {error}</p>;
}`}
                </code>
              </pre>
            </figure>
          </section>

          {/* مثال كامل */}
          <section aria-labelledby='full-example' className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <h3 id='fetch-title' className='text-lg font-semibold'>
                🛠️ مثال كامل مع التحميل والأخطاء
              </h3>
            </div>
            <p className='text-slate-300'>
              خلينا نطبق الكلام ده على طلب فعلي باستخدام{' '}
              <code
                className='rounded bg-zinc-800 px-1 text-slate-200'
                dir='ltr'
              >
                fetch()
              </code>{' '}
              ونشوف إزاي هندير الحالات كلها:
            </p>

            <figure className='mb-4'>
              <figcaption className='mb-1 mt-2 flex items-center gap-1'>
                <Lightbulb
                  className='h-4 w-4 text-green-400'
                  aria-hidden='true'
                />
                <h4 className='text-base font-medium'>مثال عملي:</h4>
              </figcaption>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
                aria-label='JavaScript example for var'
                dir='ltr'
              >
                <code>
                  {`import { useEffect, useState } from "react";

function UsersWithStates() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("الرد من السيرفر غير ناجح");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader2 className="animate-spin w-6 h-6 text-blue-500" />;
  if (error) return <p className="text-red-500 flex items-center gap-2">
    <AlertCircle className="w-5 h-5" /> {error}
  </p>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map(user => (
        <li key={user.id} className="bg-white text-gray-900 p-4 rounded-xl shadow">
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default UsersWithStates;`}
                </code>
              </pre>
            </figure>
          </section>

          {/* خاتمة */}
          <section className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <Sparkles
                className='h-6 w-6 text-orange-400'
                aria-hidden='true'
              />
              <h3 className='text-lg font-semibold'>الخلاصة</h3>
            </div>
            <p className='text-slate-300'>
              التعامل مع حالات <strong>التحميل</strong> و
              <strong>الأخطاء</strong> مش مجرد رفاهية، لكنه أساس أي تجربة مستخدم
              كويسة. عرض مؤشر تحميل واضح بيطمن المستخدم إن التطبيق شغال، وإظهار
              رسالة خطأ ودية بيسهل عليه يفهم المشكلة بدل ما يسيب الموقع ويمشي.
            </p>
          </section>
        </section>
        <hr className='my-4 border-slate-700' />

        {/* Keep API Keys Safe */}
        <section
          dir='rtl'
          className='prose prose-invert max-w-none text-right leading-relaxed'
          itemScope
          itemType='https://schema.org/Article'
        >
          <h2
            className='text-2xl font-bold mb-4 flex items-center gap-2'
            id='secure-api-keys-title'
          >
            <KeyRound className='w-6 h-6 text-indigo-600' aria-hidden='true' />
            تأمين مفاتيح الـ API في تطبيقات React:
          </h2>
          <p className='mb-6 text-slate-300' itemProp='description'>
            عند التعامل مع واجهات برمجية{' '}
            <span className='font-semibold'>تتطلب مفتاح API</span>، لازم تراعي
            جانب الأمان كويس جدًا. أي خطأ زي رفع المفتاح على{' '}
            <span className='underline'>GitHub</span> أو كتابته بشكل مباشر في
            الكود ممكن يسبب مشاكل خطيرة زي استغلال حسابك أو حتى حظر مشروعك من
            مزوّد الخدمة.
          </p>
          <section aria-labelledby='loading-state' className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <Pin className='w-4 h-4 text-blue-600' aria-hidden='true' />
              <h3 id='fetch-title' className='text-lg font-semibold'>
                الطريقة الصحيحة لحفظ مفاتيحك
              </h3>
            </div>
            <ol className='list-decimal list-inside space-y-1 text-slate-300'>
              <li>
                أنشئ ملف{' '}
                <code
                  className='rounded bg-zinc-800 px-1 text-slate-200'
                  dir='ltr'
                >
                  .env
                </code>{' '}
                في جذر المشروع (نفس مكان{' '}
                <code
                  className='rounded bg-zinc-800 px-1 text-slate-200'
                  dir='ltr'
                >
                  package.json
                </code>
                ).
              </li>
              <li>
                أضف متغير البيئة الخاص بك، ولازم يبدأ بـ{' '}
                <code
                  className='rounded bg-zinc-800 px-1 text-slate-200'
                  dir='ltr'
                >
                  VITE_
                </code>{' '}
                لو شغال بـ Vite.
              </li>
              <li>
                احرص على إضافة{' '}
                <code
                  className='rounded bg-zinc-800 px-1 text-slate-200'
                  dir='ltr'
                >
                  .env
                </code>{' '}
                لملف{' '}
                <code
                  className='rounded bg-zinc-800 px-1 text-slate-200'
                  dir='ltr'
                >
                  .gitignore
                </code>{' '}
                قبل ما ترفع الكود.
              </li>
            </ol>
            <figure className='mb-4'>
              <figcaption className='mb-1 mt-2 flex items-center gap-1'>
                <Lightbulb
                  className='h-4 w-4 text-green-400'
                  aria-hidden='true'
                />
                <h4 className='text-base font-medium'>مثال عملي:</h4>
              </figcaption>
              <pre
                className='bg-slate-800 p-4 rounded-md overflow-x-auto text-left'
                aria-label='JavaScript example for var'
                dir='ltr'
              >
                <code>
                  {`# 📂 ملف .env
VITE_API_KEY=your_actual_key_here

# طريقة استخدامه داخل الكود
const apiKey = import.meta.env.VITE_API_KEY;

axios.get(\`https://api.example.com/data?apikey=\${apiKey}\`)
  .then(res => setData(res.data))
  .catch(err => setError(err.message));`}
                </code>
              </pre>
            </figure>
            <div className='flex items-center gap-3'>
              <AlertTriangle
                className='h-7 w-7 text-red-600'
                aria-hidden='true'
              />
              <p className='text-sm text-slate-300 leading-relaxed'>
                <strong className='text-slate-200'>مهم جدًا:</strong> لو المفتاح
                بتاعك اتسرب بالخطأ، لازم تعامله زي كلمة السر: أوقفه فورًا من
                لوحة تحكم مزوّد الخدمة (Dashboard) واطلب مفتاح جديد. الاستهتار
                بالنقطة دي ممكن يسبب لك فواتير عالية أو حتى إلغاء حسابك.
              </p>
            </div>
            <p className='text-base text-slate-300 leading-relaxed'>
              بتطبيق الخطوات دي، هتضمن إن مفاتيحك آمنة وتشتغل على مشروعك بدون أي
              مخاطر أو أعطال غير متوقعة.
            </p>
          </section>
        </section>
        <hr className='my-4 border-slate-700' />

        {/* Fun APIs */}
        <section
          dir='rtl'
          className='prose prose-invert max-w-none text-right leading-relaxed'
          itemScope
          itemType='https://schema.org/Article'
        >
          <h2
            className='text-2xl font-bold mb-4 flex items-center gap-2'
            id='practice-apis-title'
          >
            <Zap className='w-6 h-6 text-yellow-500' aria-hidden='true' />
            واجهات برمجية ممتعة للتجربة والتعلّم:
          </h2>
          <p className='mb-6 text-slate-300' itemProp='description'>
            لو عايز تتمرّن على **جلب البيانات في React**، فيه مجموعة كبيرة من{' '}
            <strong>الـ Public APIs</strong> المجانية اللي ممكن تستخدمها عشان
            تعمل مشاريع تدريبية مسلية، من صور الحيوانات للأفلام وحتى بيانات
            الفضاء 🚀. الفكرة إنك تبدأ بحاجة بسيطة وتطوّرها بمرور الوقت.
          </p>
          <ul className='list-disc list-inside space-y-3 text-slate-300'>
            <li>
              <strong>JSON Placeholder:</strong> بيانات وهمية (Users, Posts,
              Todos). مثالي للاختبارات.{' '}
              <span className='text-green-600'>مفتاح غير مطلوب ✅</span>
            </li>
            <li>
              <strong>The Dog API:</strong> صور عشوائية، معلومات عن السلالات،
              بحث حسب النوع.{' '}
              <span className='text-blue-600'>يتطلب API Key مجاني</span>
            </li>
            <li>
              <strong>The Cat API:</strong> زي Dog API لكن للقطط 🐱. مناسب
              لتطبيقات الصور.{' '}
              <span className='text-blue-600'>يتطلب API Key مجاني</span>
            </li>
            <li>
              <strong>Poke API:</strong> بيانات كاملة عن Pokémon (قدرات، أشكال،
              ألعاب). مثالي لبطاقات وعروض بحث.{' '}
              <span className='text-green-600'>مفتاح غير مطلوب ✅</span>
            </li>
            <li>
              <strong>TMDB API:</strong> معلومات عن الأفلام والمسلسلات، تريندات،
              ممثلين، بوسترات.{' '}
              <span className='text-blue-600'>يتطلب API Key مجاني</span>
            </li>
            <li>
              <strong>REST Countries API:</strong> أسماء الدول، العواصم،
              الأقاليم، الأعلام، السكان.{' '}
              <span className='text-green-600'>مفتاح غير مطلوب ✅</span>
            </li>
            <li>
              <strong>Bored API:</strong> لو زهقان 🤯، بيقترح أنشطة عشوائية
              تعملها. <span className='text-green-600'>مفتاح غير مطلوب ✅</span>
            </li>
            <li>
              <strong>Joke API:</strong> نكت متنوعة (برمجة، عادية، Dark Humor
              ⚠️). تقدر تختار النوع.{' '}
              <span className='text-green-600'>مفتاح غير مطلوب ✅</span>
            </li>
            <li>
              <strong>Rick and Morty API:</strong> بيانات عن الشخصيات، الكواكب،
              الحلقات. مثالي لمحبي المسلسل.{' '}
              <span className='text-green-600'>مفتاح غير مطلوب ✅</span>
            </li>
            <li>
              <strong>NASA APIs:</strong> صور ومعلومات عن الفضاء 🌌. محتوى
              تعليمي رائع.{' '}
              <span className='text-blue-600'>يتطلب API Key مجاني</span>
            </li>
          </ul>
          {/* خاتمة */}
          <section className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <Sparkles
                className='h-6 w-6 text-orange-400'
                aria-hidden='true'
              />
              <h3 className='text-lg font-semibold'>الخلاصة</h3>
            </div>
            <p className='text-slate-300'>
              جرب تعمل مشروع صغير يجمع أكثر من API واحد! زى تطبيق يجيب صورة قطة
              أو كلب عشوائي مع نشاط من <em>Bored API</em> ونكتة من
              <em>JokeAPI</em>. كده بتتعلم تدمج البيانات من مصادر متعددة زي
              المشاريع الحقيقية.
            </p>
          </section>
        </section>
        <hr className='my-4 border-slate-700' />

        {/* Conclusion */}
        <section
          dir='rtl'
          className='prose prose-invert max-w-none text-right leading-relaxed'
          itemScope
          itemType='https://schema.org/Article'
        >
          <h2
            className='text-2xl font-bold mb-4 flex items-center gap-2'
            id='conclusion-title'
          >
            <Rocket className='w-6 h-6 text-purple-600' aria-hidden='true' />
            إنطلاقة قوية لمشاريعك القادمة:
          </h2>
          <p className='mb-6 text-slate-300' itemProp='description'>
            اللي بنيته لحد دلوقتي مش مجرد مثال عابر، لكنه{' '}
            <strong>القاعدة الأساسية</strong> اللي بيعتمد عليها عدد كبير من
            التطبيقات الفعلية في حياتنا اليومية. سواء كانت منصات التواصل
            الاجتماعي، المتاجر الإلكترونية، أو حتى تطبيقات الطقس والأخبار, كلها
            في الأساس بتتعامل مع <em>جلب البيانات من APIs</em>، إدارتها، وعرضها
            للمستخدم بشكل سلس.
          </p>

          <p className='mb-6 text-slate-300' itemProp='description'>
            الجميل في الموضوع إنك تقدر تطور التطبيق ده بخطوات بسيطة، وكل إضافة
            هتديك مهارة جديدة وتقربك من مستوى المحترفين.
          </p>

          <ul className='list-disc list-inside space-y-2 text-slate-300'>
            <li>
              <strong>خاصية البحث:</strong> خلى المستخدم يكتب كلمة مفتاحية ويعرض
              النتائج المناسبة فقط.
            </li>
            <li>
              <strong>التصفية:</strong> أضف فلاتر زي (التاريخ، التصنيف، الفئة)
              عشان تسهل الوصول للمعلومة.
            </li>
            <li>
              <strong>الصفحات (Pagination):</strong> لو عندك بيانات كتيرة، قسمها
              على صفحات لسهولة التصفح وتحسين الأداء.
            </li>
            <li>
              <strong>صفحة تفاصيل:</strong> لما المستخدم يضغط على عنصر محدد،
              خليه يشوف معلومات إضافية في صفحة منفصلة.
            </li>
          </ul>

          <section className='mt-8'>
            <div className='mb-3 flex items-center gap-2'>
              <Sparkles
                className='h-6 w-6 text-orange-400'
                aria-hidden='true'
              />
              <h3 className='text-lg font-semibold'>الخلاصة</h3>
            </div>
            <p className='text-slate-300'>
              كل ما هتكمل مشوارك كمطور، هتلاقي الأنماط دي بتتكرر في مشاريع كتير،
              ومع كل مرة هتطبقها فيها هتبقى أسرع وأقوى. إتقانك للخطوات دي من
              دلوقتي هو استثمار لمستقبلك المهني.
            </p>
          </section>
        </section>
      </article>
    );
  },
};
