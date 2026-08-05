"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./blog.module.css";

export type BlogPost = { id: number; title: string; summary: string; image: string; category: string; date: string };

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const perPage = 15;

  const filtered = useMemo(() => {
    const search = query.toLocaleLowerCase("tr").trim();
    const result = posts.filter((post) => `${post.title} ${post.summary} ${post.category}`.toLocaleLowerCase("tr").includes(search));
    if (sort === "oldest") return [...result].sort((a, b) => a.id - b.id);
    if (sort === "title") return [...result].sort((a, b) => a.title.localeCompare(b.title, "tr"));
    return [...result].sort((a, b) => b.id - a.id);
  }, [posts, query, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage));
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  return <>
    <div className={styles.toolbar}>
      <p><strong>{filtered.length}</strong> blog yazısı</p>
      <div className={styles.controls}>
        <label className={styles.search}><span className={styles.srOnly}>Blog yazılarında ara</span><input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Blog yazısı ara" /><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 20-5.2-5.2a7.5 7.5 0 1 0-1.4 1.4L20 21l1-1ZM5 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" /></svg></label>
        <label className={styles.sort}><span className={styles.srOnly}>Blog yazılarını sırala</span><select value={sort} onChange={(event) => { setSort(event.target.value); setPage(1); }}><option value="newest">En yeni yazılar</option><option value="oldest">En eski yazılar</option><option value="title">Başlığa göre</option></select></label>
      </div>
    </div>

    {visible.length ? <div className={styles.postGrid}>
      {visible.map((post) => <article className={styles.postCard} key={post.id}>
        <div className={styles.postImage}><Image src={post.image} alt={post.title} fill sizes="(max-width: 650px) 100vw, (max-width: 950px) 50vw, 33vw" /></div>
        <div className={styles.postMeta}><span>{post.category}</span><time>{post.date}</time></div>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <span className={styles.readMore}>YAZIYI OKU →</span>
      </article>)}
    </div> : <p className={styles.empty}>Aramanızla eşleşen blog yazısı bulunamadı.</p>}

    <nav className={styles.pagination} aria-label="Blog sayfaları">
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button className={number === page ? styles.activePage : ""} onClick={() => { setPage(number); window.scrollTo({ top: 520, behavior: "smooth" }); }} key={number} aria-current={number === page ? "page" : undefined}>{number}</button>)}
    </nav>
  </>;
}
