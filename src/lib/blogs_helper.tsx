import BacktoBlogs from '@/components/blogs/BacktoBlogs';
import LoadingSection from '@/components/loading-section';

export const LoadingContent = () => {
  return (
    <>
      <LoadingSection />
      <div className='flex justify-center items-center'>
        <BacktoBlogs />
      </div>
    </>
  );
};

const contentStyle = {
  h2: 'text-xl font-semibold text-slate-200 mb-2',
  p: 'text-slate-300',
};

export const BlogContent = () => {
  return (
    <article className='prose prose-invert max-w-none leading-relaxed'>
      <p>
        Frontend development is changing rapidly, and with the evolution of
        tools and frameworks every year, we need to stay updated and
        continuously improve our skills. In this article, we’ll cover practical
        tips, tools, and mindset shifts to help you become a better Frontend
        developer in 2025.
      </p>
      <br />

      <h2 className={contentStyle.h2}>
        1. Master the Basics (HTML, CSS, JavaScript)
      </h2>
      <p className={contentStyle.p}>
        Even if you specialize in React or Next.js, the fundamentals must be
        solid:
      </p>
      <ul>
        <li>
          <strong>HTML Semantics:</strong> Use tags like{' '}
          <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>,{' '}
          <code>&lt;header&gt;</code> correctly for accessibility and SEO.
        </li>
        <li>
          <strong>CSS & Tailwind:</strong> Focus on flex, grid, responsive
          design, and Tailwind utilities to speed up development.
        </li>
        <li>
          <strong>JavaScript ES6+:</strong> Learn destructuring, spread
          operators, async/await, and DOM manipulation.
        </li>
      </ul>

      <p>Practical Example:</p>
      <pre className='bg-slate-800 p-4 rounded-md overflow-x-auto'>
        <code>{`<article>
  <header>
    <h1>My Blog Title</h1>
    <time datetime="2025-08-19">August 19, 2025</time>
  </header>
  <p>This is an example of semantic HTML.</p>
</article>`}</code>
      </pre>
      <br />

      <h2 className={contentStyle.h2}>
        2. Learn a Modern Framework Deeply (React, Next.js, or Vue/Angular)
      </h2>
      <p className={contentStyle.p}>
        Most companies now use React or Next.js for modern projects. Key skills:
      </p>
      <ul>
        <li>
          <strong>React:</strong> Hooks (useState, useEffect), Context, Custom
          Hooks.
        </li>
        <li>
          <strong>Next.js:</strong> Server Side Rendering, Static Generation,
          API routes.
        </li>
        <li>
          <strong>State Management:</strong> Zustand, Redux, or React Query.
        </li>
      </ul>

      <p>React Hook Example:</p>
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
      <br />

      <h2 className={contentStyle.h2}>3. Improve UI/UX and Design Skills</h2>
      <ul>
        <li>
          Learn to design <strong>simple and attractive interfaces</strong>: use
          spacing, typography, and colors.
        </li>
        <li>
          Use design tools like Figma or Adobe XD to create wireframes before
          development.
        </li>
        <li>
          Focus on <strong>Dark Mode, accessibility, and responsiveness</strong>
          .
        </li>
      </ul>
      <p>
        <strong>Tip:</strong> Every component should be reusable, modular, and
        user-friendly.
      </p>
      <br />

      <h2 className={contentStyle.h2}>4. Modern Development Tools</h2>
      <ul>
        <li>VSCode with plugins like Prettier and ESLint.</li>
        <li>Browser DevTools: Debug JavaScript, CSS, and performance.</li>
        <li>Vite / Next.js: Fast development with Hot Reload.</li>
        <li>
          Framer Motion / TailwindCSS Animate: Smooth and appealing animations.
        </li>
      </ul>
      <br />

      <h2 className={contentStyle.h2}>5. Optimize Performance</h2>
      <ul>
        <li>Lazy-load images and components.</li>
        <li>
          Use <strong>Code Splitting and Dynamic Imports</strong>.
        </li>
        <li>Reduce unnecessary re-renders with React.memo and useCallback.</li>
        <li>
          Use <strong>Image Optimization</strong> in Next.js {'<Image />'}.
        </li>
      </ul>
      <br />

      <h2 className={contentStyle.h2}>
        6. Adopt a Continuous Learning Mindset
      </h2>
      <ul>
        <li>Read blogs and documentation regularly.</li>
        <li>Follow the latest updates in React, Tailwind, and Next.js.</li>
        <li>Participate in small open-source projects to apply your skills.</li>
        <li>
          Learn <strong>Debugging and Problem Solving</strong> instead of
          relying on copy-paste.
        </li>
      </ul>

      <blockquote>
        "The best way to become a professional Frontend developer is to combine
        practical learning with real projects and keep up with the latest trends
        every day."
      </blockquote>
    </article>
  );
};
