// GitHub Pages بيخدم الموقع تحت /اسم-الريبو، فلازم نضيفه قبل مسارات الصور
export default function imageLoader({ src }: { src: string }) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`;
}