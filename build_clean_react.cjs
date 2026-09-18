const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync('C:/Users/ASUS/.gemini/antigravity/brain/465c1002-6d6c-49ef-a79c-ebe56acf285f/.system_generated/steps/2/content.md', 'utf8');

function htmlToJsx(html) {

  let jsx = html.replace(/<!--[\s\S]*?-->/g, '');

  jsx = jsx.replace(/<a[^>]*href="\/cdn-cgi\/l\/email-protection[^"]*"[^>]*>[\s\S]*?<\/a>/g, (match) => {
    if (match.includes('Fotter_nrj')) {
      return '<a href="mailto:info@apexignite.com" className="Fotter_nrj-contact-link">info@apexignite.com</a>';
    }
    return '<a href="mailto:info@apexignite.com" className="nrj_Header-link">info@apexignite.com</a>';
  });


  jsx = jsx.replace(/\bclass="/g, 'className="');
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
  jsx = jsx.replace(/\btabindex="/g, 'tabIndex="');
  jsx = jsx.replace(/\bautocomplete="/g, 'autoComplete="');
  jsx = jsx.replace(/\bnovalidate\b/g, 'noValidate');
  jsx = jsx.replace(/\bplaysinline\b/g, 'playsInline');
  jsx = jsx.replace(/\bautoplay\b/g, 'autoPlay');
  jsx = jsx.replace(/\bselected\b/g, 'defaultValue=""');


  jsx = jsx.replace(/\bstroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/\bstroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/\bstroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/\bfill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/\bclip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/\bclip-path=/g, 'clipPath=');
  jsx = jsx.replace(/\bstop-color=/g, 'stopColor=');
  jsx = jsx.replace(/\bstop-opacity=/g, 'stopOpacity=');
  jsx = jsx.replace(/\bxlink:href=/g, 'xlinkHref=');

 
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').map(s => s.trim()).filter(Boolean);
    const objProps = rules.map(rule => {
      const idx = rule.indexOf(':');
      if (idx === -1) return '';
      let key = rule.slice(0, idx).trim();
      let val = rule.slice(idx + 1).trim();
    
      if (key.startsWith('--')) {
        return `'${key}': '${val}'`;
      }
      
      key = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      return `${key}: '${val}'`;
    }).filter(Boolean);
    return `style={{ ${objProps.join(', ')} }}`;
  });


  jsx = jsx.replace(/<(img|input|br|hr|source)([^>]*?)(?<!\/)>/gi, '<$1$2 />');


  jsx = jsx.replace(/src="\.\/assets\//g, 'src="/assets/');
  jsx = jsx.replace(/src="assets\//g, 'src="/assets/');
  jsx = jsx.replace(/data-img="assets\//g, 'data-img="/assets/');


  jsx = jsx.replace(/onerror="[^"]*"/g, '');

  return jsx;
}

const bodyStart = raw.indexOf('<body>') + 6;
const bodyEnd = raw.indexOf('</body>');
const body = raw.slice(bodyStart, bodyEnd);

console.log('Original body length:', body.length);

fs.writeFileSync('converted_body.txt', htmlToJsx(body));
console.log('Converted body written to converted_body.txt');

