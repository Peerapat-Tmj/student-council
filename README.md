# เว็บไซต์คณะกรรมการสภานักเรียน โรงเรียนสิรินธรราชวิทยาลัย

## โครงสร้างไฟล์

```
/
├── index.html                        ← หน้าแรก
├── assets/
│   ├── css/
│   │   └── style.css                 ← CSS หลัก (ห้ามลบ)
│   ├── js/
│   │   ├── components.js             ← Navbar + Footer (ห้ามลบ)
│   │   └── main.js                   ← Slider + Animations (ห้ามลบ)
│   └── images/
│       ├── hero/                     ← รูป Slider (hero1.jpg, hero2.jpg, hero3.jpg)
│       ├── announcements/            ← รูปข่าว
│       ├── members/                  ← รูปสมาชิก
│       └── logos/                    ← โลโก้
├── about/
│   ├── history.html                  ← ประวัติคณะกรรมการสภานักเรียนฯ
│   └── committee.html                ← ทำเนียบคณะกรรมการ
├── announcements/
│   ├── index.html                    ← หน้ารวมข่าวสาร
│   ├── announcement1.html            ← ข่าวที่ 1 (ตัวอย่าง + template)
│   └── announcement2.html            ← ข่าวที่ 2
└── activities/
    ├── index.html                    ← หน้ารวมกิจกรรม
    ├── activity1.html                ← โครงการที่ 1 (placeholder)
    ├── activity2.html                ← โครงการที่ 2 (placeholder)
    └── activity3.html                ← โครงการที่ 3 (placeholder)
```

---

## วิธีเพิ่มข่าวใหม่

1. **Copy** ไฟล์ `announcements/announcement1.html`
2. **Rename** เป็น `announcement3.html` (หรือลำดับถัดไป)
3. **แก้ไข** ส่วนที่มีป้ายกำกับ `[แก้ไข]` ในโค้ด:
   - `<title>` — ชื่อข่าว
   - breadcrumb — ชื่อย่อ
   - `<h1>` — หัวข้อข่าว
   - `.article-meta` — ประเภท + วันที่
   - `.article-content` — เนื้อหาข่าว
   - รูปภาพ (ถ้ามี)
4. **เพิ่ม Card** ในไฟล์ `announcements/index.html` และ `index.html`

---

## วิธีเพิ่มรูปสมาชิก

วางรูปในโฟลเดอร์ `assets/images/members/` แล้วแก้ไข `about/committee.html`:

```html
<!-- เปลี่ยน src เป็น path ของรูป -->
<img src="../assets/images/members/ชื่อไฟล์.jpg" alt="ชื่อสมาชิก">
```

ขนาดรูปที่แนะนำ: **400×400 px** (สี่เหลี่ยมจัตุรัส)

---

## วิธีเพิ่มรูป Hero Slider

วางรูปใน `assets/images/hero/` ชื่อไฟล์ `hero1.jpg`, `hero2.jpg`, `hero3.jpg`

ขนาดรูปที่แนะนำ: **1920×810 px** (สัดส่วน 16:9 กว้าง)

---

## วิธีแก้ลิงก์โซเชียลมีเดีย

แก้ไขใน `assets/js/components.js` บรรทัดที่มี:
```js
href="https://www.facebook.com"   // ← เปลี่ยนเป็น URL Facebook จริง
href="https://www.instagram.com"  // ← เปลี่ยนเป็น URL Instagram จริง
```

---

## วิธีแก้ลิงก์ธรรมนูญ Google Drive

แก้ไขใน `about/committee.html` บรรทัดที่มี:
```html
href="https://drive.google.com"  // ← เปลี่ยนเป็น URL Google Drive จริง
```

---

## เทคโนโลยี

- HTML5, CSS3, Vanilla JavaScript
- ฟอนต์: Kanit (หัวข้อ), Sarabun (เนื้อหา) — โหลดจาก Google Fonts
- ไม่ใช้ framework ใด ๆ — แก้ไขได้ง่าย
