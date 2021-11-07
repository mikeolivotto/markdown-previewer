const defaultMarkdown = `# H1
## H2
### H3

\`<p>display code</p>\`

Write multi-line code by opening and closing with 3 backticks:
\`\`\`
function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
\`\`\`
    
Style your text in **bold**, _italic_, or even ~~cross stuff out~~.
_**Go**_ _~~nuts~~_ and combine them ~~**as you please**~~. 


You can link to [your favourite website](https://www.yvanehtnioj.com)

> Make it clear you're quoting someone by using block quote syntax

Tables - add as many rows/columns as you need:

Column 1 | Column 2 | Column 3
------------ | ------------- | ------------- 
Col1 Row1 | Col2 Row1 | Col3 Row1
Col1 Row1 | Col2 Row2 | Col3 Row 2

Create lists:
- Regular list item
- Indented to create a sub-list
    - Indented again for deeper lists

* You can use dashes or asterisks - whatever you prefer.

1. Numbered lists are also possible.
1. And very simple
    
And if you want to include embedded images:

![React Logo w/ Text](/logo192.png)
`;

export default defaultMarkdown;
