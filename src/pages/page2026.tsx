import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Code,
  Library,
  CheckSquare,
  Trash2,
  Plus,
  Star,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

// Types
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface ResourceCardProps {
  title: string;
  rating: number;
  features?: string[];
  description?: string;
  link?: string;
}

interface StorageResult {
  key: string;
  value: string;
  shared: boolean;
}

interface Channel {
  name: string;
  desc: string;
}

interface Tip {
  title: string;
  desc: string;
}

// Extend Window interface for storage
declare global {
  interface Window {
    storage: {
      get: (key: string, shared?: boolean) => Promise<StorageResult | null>;
      set: (
        key: string,
        value: string,
        shared?: boolean,
      ) => Promise<StorageResult | null>;
      delete: (
        key: string,
        shared?: boolean,
      ) => Promise<{ key: string; deleted: boolean; shared: boolean } | null>;
      list: (
        prefix?: string,
        shared?: boolean,
      ) => Promise<{ keys: string[]; prefix?: string; shared: boolean } | null>;
    };
  }
}

export default function Page2026() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Load tasks from storage
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async (): Promise<void> => {
    try {
      const result = await window.storage.get('frontend-tasks');
      if (result && result.value) {
        setTasks(JSON.parse(result.value));
      }
    } catch (error: unknown) {
      console.log('No saved tasks found', error);
    }
  };

  const saveTasks = async (newTasks: Task[]): Promise<void> => {
    try {
      await window.storage.set('frontend-tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = (text: string): void => {
    if (text.trim()) {
      const newTasks: Task[] = [
        ...tasks,
        { id: Date.now(), text: text.trim(), completed: false },
      ];
      setTasks(newTasks);
      saveTasks(newTasks);
      setTaskInput('');
    }
  };

  const toggleTask = (id: number): void => {
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const deleteTask = (id: number): void => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const clearCompleted = (): void => {
    const newTasks = tasks.filter((t) => !t.completed);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const progress: number =
    tasks.length > 0
      ? Math.round(
          (tasks.filter((t) => t.completed).length / tasks.length) * 100,
        )
      : 0;

  const suggestedTasks: string[] = [
    'إكمال كورس HTML من freeCodeCamp',
    'حل 10 تحديات Frontend Mentor',
    'بناء Portfolio شخصي',
    'تعلم CSS Grid و Flexbox',
  ];

  const ResourceCard = ({
    title,
    rating,
    features,
    description,
    link,
  }: ResourceCardProps) => (
    <Card className='hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-l-purple-500'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          {title}
          <Badge variant='secondary' className='gap-1'>
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className='w-3 h-3 fill-yellow-500 text-yellow-500'
              />
            ))}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {features && (
          <ul className='space-y-2'>
            {features.map((feature, i) => (
              <li key={i} className='flex items-start gap-2'>
                <span className='text-green-500 mt-1'>✓</span>
                <span className='text-sm'>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        {description && (
          <p className='text-sm text-muted-foreground'>{description}</p>
        )}
        {link && (
          <Button asChild variant='default' className='w-full gap-2'>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              زيارة الموقع <ExternalLink className='w-4 h-4' />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );

  const javascriptTopics: string[] = [
    'ES6+ Features: arrow functions, destructuring, spread/rest operators, template literals',
    'Arrays & Objects: methods متقدمة مثل map, filter, reduce, find, some, every',
    'Promises & Async/Await: فهم asynchronous JavaScript بعمق',
    'Closures & Scope: lexical scope, function scope, block scope',
    'Event Loop: كيف JavaScript ينفذ الكود asynchronously',
  ];

  const typescriptTopics: string[] = [
    'Basic Types: string, number, boolean, arrays, tuples',
    'Interfaces & Types: الفرق بينهم ومتى تستخدم كل واحد',
    'Functions: typing functions, optional parameters, default values',
    'Union & Intersection Types',
  ];

  const reactConcepts: string[] = [
    'JSX',
    'Components',
    'Props & State',
    'Events',
    'Conditional Rendering',
    'Lists & Keys',
    'Forms',
  ];

  const reactHooks: string[] = [
    'useState',
    'useEffect',
    'useContext',
    'useRef',
    'useMemo',
    'useCallback',
  ];

  const studyTips: Tip[] = [
    {
      title: '💡 لا تذاكر بالترتيب فقط',
      desc: 'بعد كل موضوع، اصنع مشروع صغير يطبق ما تعلمته',
    },
    {
      title: '⚡ 80/20 Rule',
      desc: 'ركز على 20% من المحتوى اللي ح تستخدمه 80% من الوقت',
    },
    {
      title: '🔨 Build while learning',
      desc: 'لا تنتظر تخلص كل حاجة عشان تبدأ تبني مشاريع',
    },
    {
      title: '👥 Join communities',
      desc: 'Discord servers، Reddit (r/reactjs)، Twitter tech community',
    },
  ];

  const youtubeChannels: Channel[] = [
    {
      name: 'Traversy Media',
      desc: 'شروحات واضحة + crash courses',
    },
    { name: 'Kevin Powell', desc: 'متخصص CSS + Responsive' },
    {
      name: 'Web Dev Simplified',
      desc: 'شرح مبسط + فيديوهات قصيرة',
    },
    { name: 'Elzero Web School', desc: 'أفضل محتوى عربي' },
    { name: 'Unique Coderz Academy', desc: 'محتوى قوي بالعربي' },
    { name: 'Codezilla', desc: 'مشاريع واقعية بالعربي' },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-4 md:p-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8 space-y-4'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30'>
            <Sparkles className='w-4 h-4 text-purple-400' />
            <span className='text-sm text-purple-300'>خطة دراسية شاملة</span>
          </div>
          <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Frontend Developer
          </h1>
          <p className='text-xl text-slate-300'>React & Next.js</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue='react' className='space-y-6'>
          <TabsList className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-900/50 p-2 h-auto'>
            <TabsTrigger
              value='react'
              className='gap-2 data-[state=active]:bg-purple-600'
            >
              <BookOpen className='w-4 h-4' /> React & Next.js
            </TabsTrigger>
            <TabsTrigger
              value='html'
              className='gap-2 data-[state=active]:bg-purple-600'
            >
              <Code className='w-4 h-4' /> HTML & CSS
            </TabsTrigger>
            <TabsTrigger
              value='resources'
              className='gap-2 data-[state=active]:bg-purple-600'
            >
              <Library className='w-4 h-4' /> المصادر
            </TabsTrigger>
            <TabsTrigger
              value='tasks'
              className='gap-2 data-[state=active]:bg-purple-600'
            >
              <CheckSquare className='w-4 h-4' /> المهام
            </TabsTrigger>
          </TabsList>

          {/* React Tab */}
          <TabsContent value='react' className='space-y-6'>
            <Card className='bg-slate-900/50 border-purple-500/30'>
              <CardHeader>
                <CardTitle className='text-2xl'>
                  📘 خطة React & Next.js
                </CardTitle>
                <CardDescription className='text-lg'>
                  خطة متقدمة للتطوير باستخدام التقنيات الحديثة - مدة 6-8 أشهر
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='bg-slate-900/50 border-purple-500/30'>
              <CardHeader>
                <CardTitle className='text-xl'>
                  🎯 المرحلة الأولى: الأساسيات القوية (شهر - شهرين)
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div>
                  <h3 className='font-semibold text-lg mb-3 text-purple-300'>
                    JavaScript المتقدم
                  </h3>
                  <ul className='space-y-2 text-sm text-slate-300'>
                    {javascriptTopics.map((item, i) => (
                      <li key={i} className='flex gap-2'>
                        <span className='text-purple-400'>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='font-semibold text-lg mb-3 text-purple-300'>
                    TypeScript الأساسيات
                  </h3>
                  <ul className='space-y-2 text-sm text-slate-300'>
                    {typescriptTopics.map((item, i) => (
                      <li key={i} className='flex gap-2'>
                        <span className='text-purple-400'>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-slate-900/50 border-purple-500/30'>
              <CardHeader>
                <CardTitle className='text-xl'>
                  ⚛️ المرحلة الثانية: React الأساسي (شهر - شهرين)
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div>
                  <h3 className='font-semibold text-lg mb-3 text-purple-300'>
                    React Core Concepts
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {reactConcepts.map((item) => (
                      <Badge key={item} variant='secondary'>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className='font-semibold text-lg mb-3 text-purple-300'>
                    React Hooks الأساسية
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {reactHooks.map((item) => (
                      <Badge
                        key={item}
                        variant='secondary'
                        className='bg-purple-500/20'
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-gradient-to-br from-orange-500/10 to-pink-500/10 border-orange-500/30'>
              <CardHeader>
                <CardTitle className='text-xl'>
                  💡 نصائح للدراسة الفعّالة
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-3'>
                {studyTips.map((tip, i) => (
                  <div key={i} className='bg-slate-900/50 p-4 rounded-lg'>
                    <p className='font-semibold text-orange-300 mb-1'>
                      {tip.title}
                    </p>
                    <p className='text-sm text-slate-300'>{tip.desc}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* HTML Tab */}
          <TabsContent value='html' className='space-y-6'>
            <Card className='bg-slate-900/50 border-purple-500/30'>
              <CardHeader>
                <CardTitle className='text-2xl'>
                  🎨 خطة HTML, CSS & Web Fundamentals
                </CardTitle>
                <CardDescription className='text-lg'>
                  الأساسيات الشاملة لتطوير الويب - مدة 4-6 أشهر
                </CardDescription>
              </CardHeader>
            </Card>

            <div className='grid md:grid-cols-3 gap-6'>
              <Card className='bg-blue-500/10 border-blue-500/30'>
                <CardHeader>
                  <CardTitle className='text-lg'>▶ المستوى المبتدئ</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className='space-y-2 text-sm list-decimal list-inside text-slate-300'>
                    <li>صفحة ملف شخصي</li>
                    <li>صفحة وصفة طعام</li>
                    <li>نموذج استبيان</li>
                    <li>Product landing page</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className='bg-orange-500/10 border-orange-500/30'>
                <CardHeader>
                  <CardTitle className='text-lg'>▶ المستوى المتوسط</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className='space-y-2 text-sm list-decimal list-inside text-slate-300'>
                    <li>موقع شخصي متعدد الصفحات</li>
                    <li>موقع مطعم</li>
                    <li>Photography portfolio</li>
                    <li>تخطيط مدونة</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className='bg-purple-500/10 border-purple-500/30'>
                <CardHeader>
                  <CardTitle className='text-lg'>▶ المستوى المتقدم</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className='space-y-2 text-sm list-decimal list-inside text-slate-300'>
                    <li>موقع كامل متجاوب</li>
                    <li>صفحة تجارة إلكترونية</li>
                    <li>Dashboard UI</li>
                    <li>موقع وكالة إبداعية</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value='resources' className='space-y-6'>
            <Card className='bg-slate-900/50 border-purple-500/30'>
              <CardHeader>
                <CardTitle className='text-2xl'>
                  📚 أفضل المصادر التعليمية
                </CardTitle>
                <CardDescription>
                  مصادر موثوقة ومجربة لتعلم تطوير الويب
                </CardDescription>
              </CardHeader>
            </Card>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-purple-300'>
                🌟 المصادر الشاملة (ابدأ من هنا)
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <ResourceCard
                  title='freeCodeCamp'
                  rating={5}
                  features={[
                    'منهج متكامل ومجاني 100%',
                    'يبدأ من الصفر لحد الاحتراف',
                    'مشاريع عملية وشهادات',
                    'Community نشط جداً',
                  ]}
                  description='ابدأ بـ: Responsive Web Design Certification (300 ساعة)'
                  link='https://freecodecamp.org'
                />
                <ResourceCard
                  title='The Odin Project'
                  rating={5}
                  features={[
                    'Curriculum احترافي جداً',
                    'يعلمك تفكر كمطور حقيقي',
                    'مشاريع ضخمة وواقعية',
                    'يعلمك Git من البداية',
                  ]}
                  description='المسار: Foundations → Full Stack JavaScript'
                  link='https://theodinproject.com'
                />
                <ResourceCard
                  title='MDN Web Docs'
                  rating={5}
                  features={[
                    'المرجع الرسمي للـ web development',
                    'Documentation دقيقة ومحدثة',
                    'أمثلة تفاعلية',
                    'شرح عميق لكل تقنية',
                  ]}
                  description='💡 استخدمه كـ: مرجع أثناء التعلم'
                  link='https://developer.mozilla.org'
                />
                <ResourceCard
                  title='Frontend Mentor'
                  rating={5}
                  features={[
                    'تحديات واقعية',
                    'Designs جاهزة',
                    'مشاريع عملية',
                    'مجاني',
                  ]}
                  link='https://frontendmentor.io'
                />
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4 text-purple-300'>
                📺 قنوات YouTube
              </h2>
              <div className='grid md:grid-cols-3 gap-4'>
                {youtubeChannels.map((channel) => (
                  <Card
                    key={channel.name}
                    className='bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-colors'
                  >
                    <CardHeader>
                      <CardTitle className='text-base'>
                        {channel.name}
                      </CardTitle>
                      <CardDescription className='text-xs'>
                        {channel.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value='tasks' className='space-y-6'>
            <Card className='bg-slate-900/50 border-purple-500/30'>
              <CardHeader>
                <CardTitle className='text-2xl'>✅ قائمة المهام</CardTitle>
                <CardDescription>تتبع تقدمك في رحلة التعلم</CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm font-medium'>التقدم الإجمالي</span>
                    <span className='text-sm text-muted-foreground'>
                      {tasks.filter((t) => t.completed).length} من{' '}
                      {tasks.length} مكتمل
                    </span>
                  </div>
                  <Progress value={progress} className='h-3' />
                </div>

                <div className='flex gap-2'>
                  <Input
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTask(taskInput)}
                    placeholder='أدخل مهمة جديدة...'
                    className='bg-slate-800 border-slate-700'
                  />
                  <Button onClick={() => addTask(taskInput)} className='gap-2'>
                    <Plus className='w-4 h-4' /> إضافة
                  </Button>
                </div>

                <div className='flex gap-2'>
                  <Button
                    variant={filter === 'all' ? 'default' : 'outline'}
                    onClick={() => setFilter('all')}
                    size='sm'
                  >
                    الكل
                  </Button>
                  <Button
                    variant={filter === 'active' ? 'default' : 'outline'}
                    onClick={() => setFilter('active')}
                    size='sm'
                  >
                    قيد التنفيذ
                  </Button>
                  <Button
                    variant={filter === 'completed' ? 'default' : 'outline'}
                    onClick={() => setFilter('completed')}
                    size='sm'
                  >
                    مكتملة
                  </Button>
                  <Button
                    variant='destructive'
                    onClick={clearCompleted}
                    size='sm'
                    className='mr-auto'
                  >
                    <Trash2 className='w-4 h-4' />
                  </Button>
                </div>

                {filteredTasks.length === 0 ? (
                  <div className='text-center py-12 space-y-6'>
                    <div>
                      <h3 className='text-xl font-semibold mb-2'>
                        📝 لا توجد مهام
                      </h3>
                      <p className='text-muted-foreground'>
                        ابدأ بإضافة مهمة جديدة
                      </p>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                      {suggestedTasks.map((task) => (
                        <Card
                          key={task}
                          className='cursor-pointer hover:bg-purple-500/20 transition-colors bg-slate-800/50 border-slate-700'
                          onClick={() => addTask(task)}
                        >
                          <CardContent className='p-4 text-center text-sm'>
                            {task}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className='space-y-2'>
                    {filteredTasks.map((task) => (
                      <div
                        key={task.id}
                        className={`flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700 transition-all ${
                          task.completed ? 'opacity-60' : 'hover:bg-slate-800'
                        }`}
                      >
                        <Checkbox
                          checked={task.completed}
                          onCheckedChange={() => toggleTask(task.id)}
                        />
                        <span
                          className={`flex-1 ${task.completed ? 'line-through' : ''}`}
                        >
                          {task.text}
                        </span>
                        <Button
                          variant='ghost'
                          size='sm'
                          onClick={() => deleteTask(task.id)}
                          className='text-red-400 hover:text-red-300 hover:bg-red-500/10'
                        >
                          <Trash2 className='w-4 h-4' />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <Card className='mt-8 bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white'>
          <CardContent className='p-8 text-center space-y-2'>
            <h2 className='text-2xl font-bold'>🚀 بالتوفيق في رحلتك!</h2>
            <p className='text-white/90'>
              المجال جميل والأساسيات هي أهم حاجة في رحلتك كـ Frontend Developer
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
