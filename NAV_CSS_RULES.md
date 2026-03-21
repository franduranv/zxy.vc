# ⚠️ REGLAS CRÍTICAS — NAV CSS

## Causa raíz del bug (21-Mar-2026)

El nav SIEMPRE estuvo en su lugar. El problema era **invisibilidad por color**, no layout.

### Bug: `color: var(--muted)` en `.nav-links a`
En dark mode `--muted: #555555` sobre fondo `rgba(0,0,0,0.85)` = texto invisible.

### Fix aplicado en `clean2`:
```css
.nav-links a { color: rgba(255,255,255,0.8); }
```

## Reglas que NO se deben tocar

```css
/* NAV — NO MODIFICAR */
nav { position: fixed; top: 0; z-index: 100; background: var(--nav-bg); height: 68px; }
.nav-inner { display: flex; justify-content: space-between; }
.nav-links { flex: 1; justify-content: center; }
.nav-links a { color: rgba(255,255,255,0.8); } /* CRÍTICO — no volver a var(--muted) */
```

## Footer: usar prefijo `ft-` siempre

Para evitar colisión con nav, el footer usa clases con prefijo `ft-`:
- `ft-inner`, `ft-brand`, `ft-nav`, `ft-link`, `ft-logo-img`, `ft-copy`

## Lección aprendida

**backdrop-filter** en Safari causa transparencia. Se quitó del nav pero sigue en el CSS base. Si se agrega de vuelta al nav, el fondo puede desaparecer en Safari iOS.
