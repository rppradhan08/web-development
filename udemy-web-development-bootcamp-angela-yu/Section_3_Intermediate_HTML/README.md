# Section 2 : Imtermediate HTML

## The List Elements

HTML tag used to arrange elements or text in ordered or un-ordered list fashion.

```HTML

<!--Ordered List-->
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>

<!--Ordered List-->
<ul>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
</ul>
```

**Reference**:

- Ordered List Docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#attributes

## Nesting and Indentations

When a list contains another list inside itself then the list is called a nested list.
Indentation is used for formatting text/code to make it more readable for the reader.

```HTML
<ul>
    <li>Item</li>
    <li>Item</li>
        <ul>
            <li>Sub-item</li>
            <li>Sub-item</li>
    <li>Item</li>
</ul>
```

## The Anchor Elements

The `<a>` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

```HTML
<a href="https://example.com">Website</a>
```

Here `href` is an _attribute_ of anchor tag. Attributes are used to manipulate the properties of a tag.

**Reference**:

- Anchor Elements Docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

## The Image Elements

The `<img>` HTML element embeds an image into the document.

```HTML
<img src="PATH_TO_IMAGE" alt="Image Description"/>
or
<img src="PATH_TO_IMAGE" alt="Image Description">

```

- The `src` attribute is required, and contains the path to the image you want to embed.
- The `alt` attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility — screen readers read this description out to their users so they know what the image means. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or linkrot.

**Reference**:

- The Lorem Ipsum for photos: https://picsum.photos/
- Image Elements Docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
