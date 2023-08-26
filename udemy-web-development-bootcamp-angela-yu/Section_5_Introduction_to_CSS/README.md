# Section 5 : Introduction to CSS

**CSS - Cascading Style Sheet**

CSS is a language that lets you style and layout web pages. You can use it to change the color, size, font, and position of HTML elements. You can also create animations, transitions, and other effects with CSS. CSS makes web pages look more attractive and professional.

CSS styles web pages by applying rules that can override or inherit from each other. The rules flow down from general to specific. The term cascading means that the style rules flow down from the most general to the most specific, and the final appearance of the element is determined by the combination of all the rules that affect it.

## Different ways of applying CSS to HTML

### **1. Inline CSS**

This is when you use the style attribute inside HTML elements to define their styles. For example, will make the heading blue. This method is easy to use, but it can make your HTML code messy and hard to maintain. It also has low specificity, which means that other CSS rules can easily override it.

```HTML
<h1 style="color:blue;"> A Blue Heading</h1>
```

### **2. Internal or Embedded CSS**

This is when you use the `<style>` element in the `<head>` section of your HTML document to define CSS rules for that page. For example, `HTML <style>h1 {color: blue;}</style>` will make all headings on that page blue. This method is better than inline CSS because it keeps your HTML and CSS code separate, and it allows you to style multiple elements at once. However, it still has some drawbacks, such as not being reusable across different pages and not being able to change the styles without modifying the HTML document2.

### **3. External CSS**

This is when you use a separate file with a .css extension to store your CSS code, and then link it to your HTML document using the `<link>` element in the `<head>` section. For example, `<link rel="stylesheet" href="styles.css">` will link the styles.css file to your HTML document. This method is the most recommended one because it has many advantages, such as being reusable across multiple pages, being easy to update and maintain, having high specificity, and improving the performance and loading time of your web pages3.

> **Note**:
>
> - Inline: element
> - Internal: Webpage
> - External: Multiple Pages

## CSS Selectors

Selectors, whether used in CSS or JavaScript, enable targeting HTML elements based on their type, attributes, current states, and even position in the DOM.

There are different types of CSS selectors, such as:

- **Simple selectors:** select elements based on name, id, class, or universal selector (\*).

- **Combinator selectors:** select elements based on a specific relationship between them, such as child (>), adjacent sibling (+), general sibling (~), or descendant ( ).

- **Pseudo-class selectors:** select elements based on a certain state, such as `:hover`, `:focus`, `:checked`, etc.

- **Pseudo-element or attribute selectors:** select and style a part of an element, such as ::before, ::after, ::first-line, etc.
  Attribute selectors: select elements based on an attribute or attribute value, such as `[href]`, `[type="text"]`, `[title~=flower]`, etc.
