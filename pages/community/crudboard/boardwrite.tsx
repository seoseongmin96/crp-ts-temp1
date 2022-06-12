import React, { useState } from 'react'
import BoardWrite from "@/components/community/crudboard/BoardWrite"
import { IArticle } from '@/types';
import { InferGetStaticPropsType } from 'next';
import BoardList from "@/components/community/crudboard/BoardList"

import Article from '@/components/board/Article';

export default function BoardWritePage({articles} : InferGetStaticPropsType<typeof getStaticProps>)  {
    const [articleList, setArticleList] = useState(articles)

    const BoardWrite =async (e:React.FormEvent, formData: IArticle) => {
        e.preventDefault()
        const article: IArticle = {
            artId: Math.random(),
            title: formData.title,
            content: formData.content
            
        }
        setArticleList([article, ...articleList])
    }

    const deletePost =async (artId:number) => {
        // filter 사용해서 문제해결 한문장
        const arr: IArticle[] = articleList.filter((article: IArticle) => (article.artId !== artId))
    
        setArticleList(arr)
        }
        
    
        if(!articleList) return <h1>Loading...</h1>

        return <>
        <BoardWrite write = {BoardWrite}/>
        {articleList.map((article: IArticle)=>(
          <Article key={article.artId} deletePost={deletePost} article={article}/>
        ))}
        
        </>
    }

    export async function getStaticProps() {
        const res = await fetch(BASE_URL)
        const articles: IArticle[] = await res.json()
      
        return { props: {articles}}
      }

      const BASE_URL: string = "http://localhost:8080/articles"