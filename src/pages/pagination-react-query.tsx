import { useQuery, useInfiniteQuery, QueryCache } from 'react-query';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import React from 'react'


interface Post {
  id: number;
  title: string;
  body: string;
}

interface QueryError {
    message: string;
    // Add any other properties you expect to use here
  }

const QUERY_KEY = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async (pageParam?: number) => {
    const response = await fetch(`${QUERY_KEY}?_page=${pageParam ?? 1}`);
    const data = await response.json();
    return data as Post[];
};


const Posts: NextPage = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(
        QUERY_KEY,
        ({ pageParam }) => fetchPosts(pageParam),
        {
        getNextPageParam: (lastPage, allPages) =>
            lastPage.length === 0 ? undefined : allPages.length + 1,
        },
    );

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'error') return <div>Error</div>;

    // const { data, status } = useQuery<Post[]>(QUERY_KEY, {
    //     cacheTime: 60 * 60 * 1000, // cache for 1 hour
    //   });
    
    //   if (status === 'loading') return  (
    //     <div className='min-h-screen bg-gray-800 flex justify-center items-center'>
    //         <p className='text-white text-4xl font-semibold'>Loading...</p>
    //     </div>
    //   )           
    //   if (status === 'error') return (
    //     <div className='min-h-screen bg-gray-800 flex justify-center items-center'>
    //         <p className='text-red-500 text-6xl font-semibold'>Data Fetching Error</p>
    //     </div>
    // );


  
    return (
        <>
        <Layout>
            <Head>
                <title>Demo</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='bg-gray-800'>
                <div className='flex flex-col items-center py-10 max-w-2xl mx-auto'>
                <h1 className='text-white font-bold text-4xl'>Pagination React Query Data Fetching</h1>
                    <ul className='text-red-600 flex flex-wrap'>
                        {data?.pages.map((page, index) => (
                            <React.Fragment key={index}>
                            {page.map((post) => (
                                <div key={post.id}>
                                    <div className='p-2 bg-gray-200 rounded-sm m-1 w-[96px]'>
                                        <h2>{post.title}</h2> <br/>
                                        <p className='line-clamp-3'>{post.body}</p>
                                    </div>
                                </div>
                            ))}
                            </React.Fragment>
                        ))}
                    </ul>
                    <button
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                        className='text-white transition duration-200 animate-pulse bg-red-500 p-3 rounded-lg mt-5 hover:scale-105 hover:animate-none'
                    >
                        {isFetchingNextPage ? 'Loading more...' : 'Load more'}
                    </button>
                        {/* <>
                            {data?.map((post) => (
                                <div key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                                </div>
                            ))}
                        </> */}
                </div>
            </main>
        </Layout>
    </>
    );
  };
  
  export default Posts;