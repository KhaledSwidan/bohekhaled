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
};
