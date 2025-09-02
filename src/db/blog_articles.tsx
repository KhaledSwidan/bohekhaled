// import LoadingSection from '@/components/loading-section';
import {
  BlogList,
  BlogFigure,
} from '@/components/blogs/articles/blog-elements';
import {
  ArrowUp,
  Code,
  AlertTriangle,
  FileCode2,
  Rocket,
  Palette,
  Settings,
  Cpu,
  Layers,
  Zap,
  BookOpen,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';
import type {
  BlogContentConfig,
  BlogContentConfigLoading,
} from '@/types/blogs';

// ==================== Content Configurations ====================
const frontendSkillsConfig: BlogContentConfig = {
  title: 'Frontend Development Skills for 2025',
  description:
    'Frontend development is changing rapidly. With the evolution of tools and frameworks every year, we need to stay updated and continuously improve our skills. This article covers practical tips, tools, and mindset shifts to help you become a better Frontend developer in 2025.',
  sections: [
    {
      id: 'basics',
      title: '1. Master the Basics (HTML, CSS, JavaScript)',
      description: `Even if you specialize in React or Next.js, the fundamentals must be solid:`,
      icon: Code,
      iconColor: 'text-blue-400',
      content: (
        <>
          <BlogList
            items={[
              {
                icon: Code,
                iconColor: 'text-orange-400',
                title: 'HTML Semantics:',
                content: (
                  <>
                    Use tags like <code>&lt;article&gt;</code>,{' '}
                    <code>&lt;section&gt;</code>, <code>&lt;header&gt;</code>{' '}
                    correctly for accessibility (a11y) and SEO.
                  </>
                ),
              },
              {
                icon: Palette,
                iconColor: 'text-pink-400',
                title: 'CSS & Tailwind:',
                content: `Focus on flex, grid, responsive design, and Tailwind utilities`,
              },
              {
                icon: Cpu,
                iconColor: 'text-green-400',
                title: 'JavaScript ES6+:',
                content: `Learn destructuring, spread operators, async/await, and DOM manipulation.`,
              },
            ]}
          />

          <BlogFigure
            caption={`Practical Example of Semantic HTML`}
            code={`<article>
  <header>
    <h1>My Blog Title</h1>
    <time datetime="2025-08-19">August 19, 2025</time>
  </header>
  <p>This is an example of semantic HTML.</p>
</article>`}
          />
        </>
      ),
    },
    {
      id: 'frameworks',
      title: `2. Learn a Modern Framework Deeply (React, Next.js, Vue/Angular)`,
      description: `Most companies now use React or Next.js for modern projects. Key skills:`,
      icon: Layers,
      iconColor: 'text-purple-400',
      content: (
        <>
          <BlogList
            items={[
              {
                icon: Code,
                iconColor: 'text-cyan-400',
                title: 'React: ',
                content: 'Hooks (useState, useEffect)، Context، Custom Hooks.',
              },
              {
                icon: Rocket,
                iconColor: 'text-indigo-400',
                title: 'Next.js: ',
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
            caption='React Hook Example'
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
    {
      id: 'design',
      title: `3. Improve UI/UX and Design Skills`,
      description:
        'Understanding design principles is crucial for frontend developers:',
      icon: Palette,
      iconColor: 'text-pink-400',
      content: (
        <>
          <BlogList
            items={[
              {
                content:
                  'Design simple, attractive interfaces with spacing, typography, and colors.',
              },
              {
                content:
                  'Use design tools like Figma or Adobe XD to create wireframes before development.',
              },
              {
                content: (
                  <>
                    Focus on{' '}
                    <strong>
                      dark mode, accessibility, and responsiveness
                    </strong>
                    .
                  </>
                ),
              },
            ]}
          />
          <p>
            <strong>Tip:</strong> Every component should be reusable, modular,
            and user-friendly.
          </p>
        </>
      ),
    },
    {
      id: 'tools',
      title: '4. Modern Development Tools',
      icon: Zap,
      iconColor: 'text-yellow-400',
      description: 'Use tools that enhance productivity and code quality:',
      content: (
        <>
          <BlogList
            items={[
              {
                content: 'VSCode with plugins like Prettier and ESLint.',
              },
              {
                content:
                  'Browser DevTools for debugging JavaScript, CSS, and performance.',
              },
              {
                content: 'Vite / Next.js for fast development with Hot Reload.',
              },
              {
                content:
                  'Framer Motion / TailwindCSS Animate for smooth animations.',
              },
            ]}
          />
        </>
      ),
    },
    {
      id: 'performance',
      title: '5. Optimize Performance',
      icon: Rocket,
      iconColor: 'text-red-400',
      description:
        'Optimizing performance is crucial for a smooth user experience.',
      content: (
        <>
          <BlogList
            items={[
              {
                content: 'Lazy-load images and components.',
              },
              {
                content: (
                  <>
                    Use <strong>Code Splitting</strong> and Dynamic Imports.
                  </>
                ),
              },
              { content: 'Reduce re-renders with React.memo and useCallback.' },
              {
                content: (
                  <>
                    Use Next.js <code>&lt;Image /&gt;</code> for optimization.
                  </>
                ),
              },
            ]}
          />
        </>
      ),
    },
    {
      id: 'learning',
      title: '6. Adopt a Continuous Learning Mindset',
      icon: BookOpen,
      iconColor: 'text-sky-400',
      description: '',
      content: (
        <>
          <BlogList
            items={[
              { content: 'Read blogs and documentation regularly.' },
              {
                content:
                  'Follow the latest updates in React, Tailwind, and Next.js.',
              },
              {
                content:
                  'Join small open-source projects to apply your skills.',
              },
              {
                content:
                  'Learn debugging and problem-solving instead of relying on copy-paste.',
              },
            ]}
          />
        </>
      ),
    },
  ],
  blogQuoteText: `"The best way to become a professional Frontend developer is to combine practical learning with real projects and keep up with the latest trends every day."`,
};

const hoistingConfig: BlogContentConfig = {
  title: 'Hoisting in JavaScript',
  description: (
    <>
      Hoisting is JavaScript's <strong>compile-time behavior</strong> where
      declarations are processed before execution. Think of it as: identifiers
      are created at the top of their scope, while assignments stay where you
      wrote them.
    </>
  ),
  sections: [
    {
      id: 'what-gets-hoisted',
      title: 'What Actually Gets Hoisted?',
      description:
        'Understanding what gets hoisted in JavaScript is crucial for avoiding pitfalls.',
      icon: ArrowUp,
      iconColor: 'text-green-400',
      content: (
        <>
          <BlogList
            items={[
              {
                icon: Code,
                iconColor: 'text-blue-400',
                title: 'var → ',
                content: (
                  <>
                    hoisted and initialized to
                    <code>undefined</code>.
                  </>
                ),
              },
              {
                icon: FileCode2,
                iconColor: 'text-purple-400',
                title: 'Function declarations → ',
                content:
                  'hoisted with their definitions (can be called earlier).',
              },
              {
                icon: AlertTriangle,
                iconColor: 'text-yellow-400',
                title: 'let / const / class → ',
                content: 'hoisted but not initialized (TDZ).',
              },
            ]}
          />
        </>
      ),
    },
    {
      id: 'examples',
      title: 'Examples',
      description: 'Understanding hoisting through practical examples.',
      icon: FileCode2,
      iconColor: 'text-indigo-400',
      content: (
        <>
          <BlogFigure
            caption='# Example_1: var and undefined'
            code={`console.log(a); // undefined
var a = 10;
console.log(a); // 10`}
          />
          <BlogFigure
            caption='# Example_2: Function declaration'
            code={`greet(); // "Hello"
function greet() {
  console.log("Hello");
}`}
          />
          <BlogFigure
            caption='# Example_3: Function expression with var'
            code={`greet(); // "Hello"
function greet() {
  console.log("Hello");
}`}
          />
          <BlogFigure
            caption='# Example_4: Function expression with let / const'
            code={`whisper(); // ❌ ReferenceError (TDZ)
let whisper = function() {
  console.log("psst");
};`}
          />
          <BlogFigure
            caption='# Example_5: let / const and TDZ'
            code={`console.log(b); // ❌ ReferenceError
let b = 3;

console.log(c); // ❌ ReferenceError
const c = 7;`}
          />
          <BlogFigure
            caption='# Example_6: typeof with TDZ'
            code={`console.log(typeof u); // "undefined" (undeclared)
console.log(typeof t); // ❌ ReferenceError (t is in TDZ)
let t = 1;`}
          />
          <BlogFigure
            caption='# Example_7: class and TDZ'
            code={`new Person(); // ❌ ReferenceError
class Person {}`}
          />
          <BlogFigure
            caption='# Example_8: var shadowing'
            code={`var v = 1;
function test() {
  console.log(v); // undefined (local var v is hoisted)
  var v = 2;
  console.log(v); // 2
  }
  test();`}
          />
        </>
      ),
    },
    {
      id: 'pitfalls',
      title: 'Common Pitfalls & Fixes',
      icon: AlertTriangle,
      iconColor: 'text-red-400',
      description: ' ',
      content: (
        <>
          <BlogList
            items={[
              {
                icon: Lightbulb,
                iconColor: 'text-yellow-300',
                content:
                  'Calling a function expression before its assignment → Type/ReferenceError.',
              },
              {
                icon: Lightbulb,
                iconColor: 'text-yellow-300',
                content: (
                  <>
                    Accessing <code>let</code> / <code>const</code> /{' '}
                    <code>class</code> before declaration → ReferenceError
                    (TDZ).
                  </>
                ),
              },
            ]}
          />
        </>
      ),
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: CheckCircle2,
      iconColor: 'text-emerald-400',
      description: '',
      content: (
        <>
          <BlogList
            type='ol'
            items={[
              {
                content: (
                  <>
                    Prefer <code>const</code>, then <code>let</code>; avoid{' '}
                    <code>var</code> in modern code.
                  </>
                ),
              },
              {
                content:
                  'Always declare before use; group constants/imports at the top.',
              },
              {
                content: (
                  <>
                    {' '}
                    Enable ESLint rules: <code>no-use-before-define</code>,{' '}
                    <code>no-var</code>, <code>prefer-const</code>.
                  </>
                ),
              },
            ]}
          />
        </>
      ),
    },
  ],
  blogQuoteText: `"Relying on hoisting makes code harder to read. Declare before using, and your code will be cleaner and safer."`,
};

const learningReactjs: BlogContentConfigLoading = {
  description:
    'A complete step-by-step guide to learning React.js, from the core concepts to advanced techniques, and building modern, interactive web applications. React, developed by Facebook, is one of the most popular JavaScript libraries for building fast, interactive, and scalable user interfaces. It follows a component-based architecture, making code more reusable and easier to maintain. React is widely used for creating single-page applications (SPAs), and its virtual DOM ensures efficient rendering and smooth user experiences.',
};

export const blogArticles = {
  frontendSkillsConfig,
  hoistingConfig,
  learningReactjs,
};
