# Gallery Usage Guide

## Simple Album Structure

Just drop your images directly in the album directory - no need for a separate `images/` folder!

```
content/gallery/
├── _index.md                    # Gallery homepage
├── vacation-2024/
│   ├── index.md                # Album metadata
│   ├── beach.jpg               # Images directly in album folder
│   ├── sunset.jpg
│   └── mountains.jpg
└── family-photos/
    ├── index.md
    ├── birthday.jpg
    └── christmas.jpg
```

## Creating a New Album

1. **Create folder**: `content/gallery/your-album-name/`

2. **Add `index.md`** with your photos listed:
   ```markdown
   +++
   title = "My Album"
   description = "Album description"
   date = 2025-01-01
   [extra]
   images = [
       { src = "photo1.jpg", alt = "Description", caption = "Optional caption" },
       { src = "photo2.jpg", alt = "Description", caption = "Optional caption" }
   ]
   cover_image = "photo1.jpg"
   +++
   
   Your album description goes here.
   ```

3. **Drop your photos** directly in the same folder:
   - `photo1.jpg`
   - `photo2.jpg`
   - etc.

## Features
- **Easy uploads**: Just drag and drop images into the album folder
- **Responsive gallery** with lightbox viewer
- **Photo captions** and descriptions
- **Mobile-friendly** design

That's it! Your gallery will automatically display all albums with their photos.