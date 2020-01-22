const text = "<div>Content 01</div><div>Content 02></div>";

// quantificadores SÃO gulosos

console.log(text.match(/<div>.+<\/div>/g)); // [ '<div>Content 01</div><div>Content 02></div>' ]
console.log(text.match(/<div>.*<\/div>/g)); // [ '<div>Content 01</div><div>Content 02></div>' ]
console.log(text.match(/<div>.{0,100}<\/div>/g)); // [ '<div>Content 01</div><div>Content 02></div>' ]

// quantificadores NÃO gulosos
console.log(text.match(/<div>.+?<\/div>/g)); // [ '<div>Content 01</div>', '<div>Content 02></div>' ]
console.log(text.match(/<div>.*?<\/div>/g)); // [ '<div>Content 01</div>', '<div>Content 02></div>' ]
console.log(text.match(/<div>.{0,100}?<\/div>/g)); // [ '<div>Content 01</div>', '<div>Content 02></div>' ]
