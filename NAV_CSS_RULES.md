# ⚠️ REGLAS CRÍTICAS — NAV & FOOTER

## Causa raíz del bug (21-Mar-2026)

El footer original usaba `class="nav-logo"` en su logo — **misma clase que el nav**.
Al modificar el CSS del footer, se rompía el nav también.

### Síntoma observado:
- Nav links invisibles (color `var(--muted)` = `#555` sobre fondo negro)
- Nav logo colapsado a 0px (CSS del footer sobreescribía `.nav-logo`)

## Regla fundamental

### ✅ FOOTER usa prefijo `ft-` — siempre
```html
<!-- ✅ Correcto -->
<div class="ft-inner">
  <img class="ft-logo-img" ...>
  <a class="ft-link" ...>

<!-- ❌ NUNCA en el footer -->
<span class="nav-logo">  <!-- rompe el nav -->
<a class="nav-links">    <!-- rompe el nav -->
```

## CSS del nav — NO modificar

```css
.nav-links a { color: rgba(255,255,255,0.8); } /* NO cambiar a var(--muted) */
.nav-logo { display: inline-flex; flex-shrink: 0; }
.nav-logo img { width: 136px; height: 26px; }
```

## Lección

**Nunca compartir clases entre nav y footer.**
El prefijo `ft-` garantiza aislamiento total.
