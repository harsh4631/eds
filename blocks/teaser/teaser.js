export default function decorate(block) {
    const [mt, bg, fg] = block.children;
    mt.className ='mt';
    bg.className = 'bg';
    fg.className = 'fg';
}