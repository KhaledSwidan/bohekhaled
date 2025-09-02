import { blogArticles } from '@/db/blog_articles';
import {
  BlogArticleRenderer,
  BlogArticleRendererLoading,
} from './ReusableComponents';
import {
  ApiReactContent,
  JavaScriptFundamentalsContent,
} from './specialized-content-components';

// ==================== Content Components ====================
export const BlogContent = {
  BlogContent_1: () => (
    <BlogArticleRenderer config={blogArticles.frontendSkillsConfig} />
  ),
  BlogContent_2: () => (
    <BlogArticleRenderer config={blogArticles.hoistingConfig} />
  ),
  BlogContent_3: () => (
    <BlogArticleRendererLoading config={blogArticles.learningReactjs} />
  ),
  BlogContent_4: () => <JavaScriptFundamentalsContent />,
  BlogContent_5: () => <ApiReactContent />,
};
