export default function PDF({src}) {
    return <iframe title="PDF" src={`/pdfjs-2.5.207-es5-dist/web/viewer.html?file=${src}`} className="w-full h-screen"></iframe>
}