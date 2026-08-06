"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./category.module.css";

type Product = { id: number; name: string; price: number; image: string; href: string };

export default function CategoryProducts({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const perPage = 15;

  const filtered = useMemo(() => {
    const result = products.filter((product) => product.name.toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr").trim()));
    if (sort === "price-low") return [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...result].sort((a, b) => b.price - a.price);
    if (sort === "name") return [...result].sort((a, b) => a.name.localeCompare(b.name, "tr"));
    return result;
  }, [products, query, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage));
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  function changeQuery(value: string) { setQuery(value); setPage(1); }
  function changeSort(value: string) { setSort(value); setPage(1); }

  return <>
    <div className={styles.toolbar}>
      <p><strong>{filtered.length}</strong> ürün gösteriliyor</p>
      <div className={styles.controls}>
        <label className={styles.search}><span className="sr-only">Ürün ara</span><input value={query} onChange={(event) => changeQuery(event.target.value)} placeholder="Ürün ara" /><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 20-5.2-5.2a7.5 7.5 0 1 0-1.4 1.4L20 21l1-1ZM5 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" /></svg></label>
        <label className={styles.sort}><span className="sr-only">Ürünleri sırala</span><select value={sort} onChange={(event) => changeSort(event.target.value)}><option value="featured">Önerilen sıralama</option><option value="name">İsme göre</option><option value="price-low">Fiyat: düşükten yükseğe</option><option value="price-high">Fiyat: yüksekten düşüğe</option></select></label>
      </div>
    </div>

    {visible.length ? <div className={styles.productGrid}>
      {visible.map((product) => <article className={styles.productCard} key={product.id}>
        <Link className={styles.productImage} href={product.href} aria-label={`${product.name} ürününü inceleyin`} title={`${product.name} ürün sayfası`}><Image src={product.image} alt={`${product.name} halısaha forması, şort ve çorap seti`} title={`${product.name} halısaha forması tasarla modeli`} fill sizes="(max-width: 650px) 100vw, (max-width: 950px) 50vw, 33vw" /></Link>
        <h2><Link href={product.href}>{product.name}</Link></h2>
        <p>{product.price} TL</p>
      </article>)}
    </div> : <p className={styles.empty}>Aramanızla eşleşen ürün bulunamadı.</p>}

    {pageCount > 1 && <nav className={styles.pagination} aria-label="Kategori sayfaları">
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button className={number === page ? styles.activePage : ""} onClick={() => { setPage(number); window.scrollTo({ top: 520, behavior: "smooth" }); }} key={number} aria-current={number === page ? "page" : undefined}>{number}</button>)}
    </nav>}
  </>;
}
