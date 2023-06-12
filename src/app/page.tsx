import ArticleList from '@/components/articleList'
// import CounterComponent from '@/components/counter';
// import { decrement, increment, reset } from "@/redux/features/counterSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ArticleList />
    </main>
    // <CounterComponent />
  )
}
