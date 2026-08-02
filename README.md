# Emir Spor web sitesi

SEO odaklı Next.js sitesi. Ana dağıtım hedefi Cloudflare Workers + OpenNext'tir. Kaynak kod GitHub'da `metinnasir/emirspor` deposuna gönderilmek üzere hazırlanmıştır.

## Yerelde çalıştırma

Gereksinim: Node.js 20.9 veya üzeri ve pnpm.

```bash
pnpm install
pnpm dev
```

Kontroller:

```bash
pnpm lint
pnpm build
pnpm cf:build
```

## GitHub'a güvenli gönderim

1. Metin, GitHub'da oturum açarak `https://github.com/new` adresinden `emirspor` adlı boş bir depo oluşturur. README, `.gitignore` veya lisans eklememelidir.
2. Parola ya da kişisel erişim anahtarı kimseyle paylaşılmaz. GitHub CLI veya tarayıcıdaki güvenli oturum kullanılabilir.
3. Bu klasörde aşağıdaki komutlar çalıştırılır:

```bash
git init
git add .
git commit -m "Emir Spor ilk Next.js sürümü"
git branch -M main
git remote add origin https://github.com/metinnasir/emirspor.git
git push -u origin main
```

## Önerilen dağıtım: Cloudflare Workers

1. Cloudflare Dashboard > Workers & Pages > Create > Import a repository yolundan GitHub bağlanır.
2. Yalnızca `metinnasir/emirspor` deposuna erişim izni verilir; tüm depolara erişim gereksizdir.
3. Proje adı `emirspor`, üretim dalı `main` seçilir. Cloudflare mevcut `wrangler.jsonc` ve OpenNext yapılandırmasını kullanır.
4. İlk dağıtımdan sonra Workers projesinde Settings > Domains & Routes > Add > Custom domain üzerinden `emirspor.com` eklenir. Ardından `www.emirspor.com` eklenip tek ana adrese 301 yönlendirmesi yapılandırılır.
5. Cloudflare'ın oluşturduğu DNS kayıtları kullanılır. Mevcut e-posta/MX kayıtları silinmez.

Yerel makineden elle dağıtım alternatifi:

```bash
pnpm cf:deploy
```

Bu komut Cloudflare oturumu ister. API anahtarı sohbet, GitHub veya `.env` içine yazılmaz. Otomasyon gerekirse gizli değer Cloudflare/GitHub Secrets alanında saklanır.

## Statik Cloudflare Pages alternatifi

Bu site yalnızca statik içerik olarak kalacaksa `next.config.ts` içine `output: "export"` eklenebilir. Pages ayarları: Framework preset `Next.js (Static HTML Export)`, build command `pnpm build`, output directory `out`. Dinamik form, ISR veya sunucu özellikleri eklendiğinde Workers yolu kullanılmalıdır.

## Yayından önce doğrulanacak içerikler

- Gerçek telefon/WhatsApp ve e-posta
- Şirket unvanı, adresi ve hizmet verilen bölgeler
- Ürün kategorileri, minimum sipariş ve teslim süreleri
- Gerçek ürün fotoğrafları ve izinli müşteri referansları
- Gizlilik/çerez metni ve gerekiyorsa KVKK aydınlatması

Yanlış işletme bilgisi yayınlamamak için bu alanlar bilerek uydurulmamıştır.
