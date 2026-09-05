/* =============================================
   Shared Components (Navbar + Footer)
   สภานักเรียน โรงเรียนสิรินธรราชวิทยาลัย
   ============================================= */

const SITE_ROOT = (() => {
  const path = window.location.pathname;
  // count depth from root
  const depth = (path.match(/\//g) || []).length - 1;
  return depth > 0 ? '../'.repeat(depth) : './';
})();

function renderNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="container navbar-inner">
      <a href="${SITE_ROOT}index.html" class="navbar-brand">
        <div class="navbar-logo"><img src="${SITE_ROOT}assets/images/logos/logo.png" alt="logo"></div>
        <div class="navbar-name">
          คณะกรรมการสภานักเรียน
          <span>โรงเรียนสิรินธรราชวิทยาลัย</span>
        </div>
      </a>

      <ul class="navbar-menu">
        <li class="nav-item">
          <a href="${SITE_ROOT}index.html" class="nav-link">หน้าแรก</a>
        </li>
        <li class="nav-item">
          <a href="${SITE_ROOT}announcements/index.html" class="nav-link">ข่าวสาร</a>
        </li>
        <li class="nav-item">
          <span class="nav-link" style="cursor:default">
            เกี่ยวกับสภานักเรียน
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"/></svg>
          </span>
          <ul class="dropdown-menu">
            <li>
              <a href="${SITE_ROOT}about/history.html" class="dropdown-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                ประวัติคณะกรรมการสภานักเรียนฯ
              </a>
            </li>
            <li>
              <a href="${SITE_ROOT}about/committee.html" class="dropdown-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/></svg>
                ทำเนียบองค์การบริหารนักเรียน
              </a>
            <li>
              <a href="https://drive.google.com/drive/folders/1sztJbIJDB-AnW-R82uVhR9fGFZw1IlWr" class="dropdown-item">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 24 24" style="color: rgb(128, 82, 246);"><path fill="currentColor" d="M18 8h-8V6h8zm4-4v8l-6 6H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m-2 0H8v12h6v-4a2 2 0 0 1 2-2h4zM4 6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2H4z"></path></svg>
                ธรรมนูญสภานักเรียน
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <span class="nav-link" style="cursor:default">
            กิจกรรม-โครงการ
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"/></svg>
          </span>
          <ul class="dropdown-menu">
            <li>
              <a href="${SITE_ROOT}activities/activity2.html" class="dropdown-item">
               <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M27 6H5C3.34315 6 2 7.34315 2 9V23C2 24.6569 3.34315 26 5 26H27C28.6569 26 30 24.6569 30 23V9C30 7.34315 28.6569 6 27 6Z" fill="#b048b1"></path> <path d="M16 6V26H5C4.20435 26 3.44129 25.6839 2.87868 25.1213C2.31607 24.5587 2 23.7956 2 23V9C2 8.20435 2.31607 7.44129 2.87868 6.87868C3.44129 6.31607 4.20435 6 5 6H16Z" fill="#bb69d8"></path> <path d="M12 6V20C12 20.2652 11.8946 20.5196 11.7071 20.7071C11.5196 20.8946 11.2652 21 11 21C10.7348 21 10.4804 20.8946 10.2929 20.7071C10.1054 20.5196 10 20.2652 10 20V6H12Z" fill="#F5F5F5"></path> <path d="M25 13H20C19.7348 13 19.4804 12.8946 19.2929 12.7071C19.1054 12.5196 19 12.2652 19 12C19 11.7348 19.1054 11.4804 19.2929 11.2929C19.4804 11.1054 19.7348 11 20 11H25C25.2652 11 25.5196 11.1054 25.7071 11.2929C25.8946 11.4804 26 11.7348 26 12C26 12.2652 25.8946 12.5196 25.7071 12.7071C25.5196 12.8946 25.2652 13 25 13Z" fill="#E0E0E0"></path> <path d="M25 17H22C21.7348 17 21.4804 16.8946 21.2929 16.7071C21.1054 16.5196 21 16.2652 21 16C21 15.7348 21.1054 15.4804 21.2929 15.2929C21.4804 15.1054 21.7348 15 22 15H25C25.2652 15 25.5196 15.1054 25.7071 15.2929C25.8946 15.4804 26 15.7348 26 16C26 16.2652 25.8946 16.5196 25.7071 16.7071C25.5196 16.8946 25.2652 17 25 17Z" fill="#E0E0E0"></path> <path d="M25 21H20C19.7348 21 19.4804 20.8946 19.2929 20.7071C19.1054 20.5196 19 20.2652 19 20C19 19.7348 19.1054 19.4804 19.2929 19.2929C19.4804 19.1054 19.7348 19 20 19H25C25.2652 19 25.5196 19.1054 25.7071 19.2929C25.8946 19.4804 26 19.7348 26 20C26 20.2652 25.8946 20.5196 25.7071 20.7071C25.5196 20.8946 25.2652 21 25 21Z" fill="#E0E0E0"></path> </g></svg>
                Apps for Education
              </a>
            </li>

            <li>
              <a href="https://umbrella-system-fb0a1.web.app/" target="_blank" rel="noopener" class="dropdown-item">
                <?xml version="1.0" encoding="utf-8"?>
                <!-- License: Apache. Made by googlefonts: https://github.com/googlefonts/noto-emoji -->
                <svg width="800px" height="800px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"><path fill="#6aa5ad" d="M60.2 96.55l-.31-42.82l5.57.31l.31 44.83z"></path><path d="M47.46 104.64c-3.27-.16-4.94 2.31-4.52 6.93c.42 4.62 3.14 11.63 12.6 11.45c10.92-.21 11.75-7.8 11.57-16.21c-.12-5.85 0-10.48-.31-10.69s-7.9-.41-8.32.01c-.42.42-.11 9.56-.21 11.76s.28 6.62-3.78 6.51c-3.15-.09-3.57-2.73-3.57-3.99c.01-1.25.74-5.56-3.46-5.77z" fill="#3f7377"></path><path d="M52.12 36.21l10.42-18.75s-20.55-2.54-38.8 11.63C.54 47.11 4.21 66.86 4.21 66.86s8.84-8.42 16.07-7.78s16.29 9.39 16.29 9.39l15.55-32.26z" fill="#937ef3"></path><path d="M65.06 23.21l-1.49-5.75s20.87-.23 36.42 9.96c26.73 17.52 23.78 37.08 23.78 37.08s-5.8-8.08-18.54-7.51s-17.4 11.94-17.4 11.94L65.06 23.21z" fill="#5547f4"></path><path d="M87.86 68.12S86.7 49 82.26 39.17c-8.1-17.95-19.25-21.42-19.25-21.42s-13.42 6.6-20.48 22.87s-5.85 27.76-5.85 27.76s10.86-12.41 26.67-10.7s24.51 10.44 24.51 10.44z" fill="#6e62ed"></path><path d="M59.11 18.23c-.14-.55-.02-7.9-.07-9.48c-.07-2.34 1.92-3.83 3.71-3.78c2.34.07 3.16 2.13 3.23 3.57s.08 9.52.07 9.62c-.09.84-1.32 1.64-3.5 1.65c-1.59 0-3.25-.82-3.44-1.58z" fill="#6ca4ab"></path><path d="M87.79 70.59c1.64-.1 8.19-11.36 18.47-11.26c13.95.14 15.75 7.39 17.21 6.64c1.61-.82-.76-3.83-2.87-6.01c-2.98-3.08-7.75-4.94-15.16-4.46c-10.79.7-17.75 10.27-17.75 10.27s-9.2-10.04-25.33-10.04c-15.6 0-25.67 11.1-25.67 11.1s-5.1-9.02-17.51-9.24c-10.96-.18-15.7 8.65-14.93 9.42c.77.77 6.61-6.23 14.8-5.88c11.26.48 15.2 9.89 17.36 9.94c2.15.05 10.56-11.3 26.15-11.03c16.74.29 23.69 10.65 25.23 10.55z" fill="#004dae"></path></svg>
                โครงการ “ร่มให้ยืม”
              </a>
            </li>

            
          </ul>
        </li>
        <li class="nav-item">
          <span class="nav-link" style="cursor:default">
            ติดต่อเรา
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"/></svg>
          </span>
          <ul class="dropdown-menu">
            <li>
              <a href="https://www.facebook.com/share/1C1GjMhcid/" target="_blank" rel="noopener" class="dropdown-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/psc.council?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener" class="dropdown-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="url(#ig)"><defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f09433"/><stop offset="25%" stop-color="#e6683c"/><stop offset="50%" stop-color="#dc2743"/><stop offset="75%" stop-color="#cc2366"/><stop offset="100%" stop-color="#bc1888"/></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                Instagram
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <button class="hamburger" aria-label="เปิดเมนู">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
  document.body.prepend(nav);
}

function renderMobileMenu() {
  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.innerHTML = `
    <nav>
      <ul>
        <li class="m-nav-item">
          <a href="${SITE_ROOT}index.html" class="m-nav-link">หน้าแรก</a>
        </li>
        <li class="m-nav-item">
          <a href="${SITE_ROOT}announcements/index.html" class="m-nav-link">ข่าวสาร</a>
        </li>
        <li class="m-nav-item">
          <span class="m-nav-link" data-toggle="m-about" style="cursor:pointer">
            เกี่ยวกับสภานักเรียน
            <svg class="m-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="transition:.3s"><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"/></svg>
          </span>
          <ul class="m-sub-menu" id="m-about">
            <li><a href="${SITE_ROOT}about/history.html" class="m-sub-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              ประวัติคณะกรรมการสภานักเรียนฯ
            </a></li>
            <li><a href="${SITE_ROOT}about/committee.html" class="m-sub-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/></svg>
              ทำเนียบองค์การบริหารนักเรียน
            </a></li>
            <li>
              <a href="https://drive.google.com/drive/folders/1sztJbIJDB-AnW-R82uVhR9fGFZw1IlWr" class="m-sub-link">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 24 24" style="color: rgb(128, 82, 246);"><path fill="currentColor" d="M18 8h-8V6h8zm4-4v8l-6 6H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m-2 0H8v12h6v-4a2 2 0 0 1 2-2h4zM4 6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2H4z"></path></svg>
                ธรรมนูญสภานักเรียน
              </a>
            </li>
          </ul>
        </li>
        <li class="m-nav-item">
          <span class="m-nav-link" data-toggle="m-activities" style="cursor:pointer">
            กิจกรรม-โครงการ
            <svg class="m-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="transition:.3s"><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"/></svg>
          </span>
          <ul class="m-sub-menu" id="m-activities">
            <li>
              <a href="${SITE_ROOT}activities/activity2.html" class="dropdown-item">
               <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M27 6H5C3.34315 6 2 7.34315 2 9V23C2 24.6569 3.34315 26 5 26H27C28.6569 26 30 24.6569 30 23V9C30 7.34315 28.6569 6 27 6Z" fill="#b048b1"></path> <path d="M16 6V26H5C4.20435 26 3.44129 25.6839 2.87868 25.1213C2.31607 24.5587 2 23.7956 2 23V9C2 8.20435 2.31607 7.44129 2.87868 6.87868C3.44129 6.31607 4.20435 6 5 6H16Z" fill="#bb69d8"></path> <path d="M12 6V20C12 20.2652 11.8946 20.5196 11.7071 20.7071C11.5196 20.8946 11.2652 21 11 21C10.7348 21 10.4804 20.8946 10.2929 20.7071C10.1054 20.5196 10 20.2652 10 20V6H12Z" fill="#F5F5F5"></path> <path d="M25 13H20C19.7348 13 19.4804 12.8946 19.2929 12.7071C19.1054 12.5196 19 12.2652 19 12C19 11.7348 19.1054 11.4804 19.2929 11.2929C19.4804 11.1054 19.7348 11 20 11H25C25.2652 11 25.5196 11.1054 25.7071 11.2929C25.8946 11.4804 26 11.7348 26 12C26 12.2652 25.8946 12.5196 25.7071 12.7071C25.5196 12.8946 25.2652 13 25 13Z" fill="#E0E0E0"></path> <path d="M25 17H22C21.7348 17 21.4804 16.8946 21.2929 16.7071C21.1054 16.5196 21 16.2652 21 16C21 15.7348 21.1054 15.4804 21.2929 15.2929C21.4804 15.1054 21.7348 15 22 15H25C25.2652 15 25.5196 15.1054 25.7071 15.2929C25.8946 15.4804 26 15.7348 26 16C26 16.2652 25.8946 16.5196 25.7071 16.7071C25.5196 16.8946 25.2652 17 25 17Z" fill="#E0E0E0"></path> <path d="M25 21H20C19.7348 21 19.4804 20.8946 19.2929 20.7071C19.1054 20.5196 19 20.2652 19 20C19 19.7348 19.1054 19.4804 19.2929 19.2929C19.4804 19.1054 19.7348 19 20 19H25C25.2652 19 25.5196 19.1054 25.7071 19.2929C25.8946 19.4804 26 19.7348 26 20C26 20.2652 25.8946 20.5196 25.7071 20.7071C25.5196 20.8946 25.2652 21 25 21Z" fill="#E0E0E0"></path> </g></svg>
                Apps for Education
              </a>
            </li>

            <li>
              <a href="https://umbrella-system-fb0a1.web.app/" target="_blank" rel="noopener" class="dropdown-item">
                <?xml version="1.0" encoding="utf-8"?>
                <!-- License: Apache. Made by googlefonts: https://github.com/googlefonts/noto-emoji -->
                <svg width="800px" height="800px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"><path fill="#6aa5ad" d="M60.2 96.55l-.31-42.82l5.57.31l.31 44.83z"></path><path d="M47.46 104.64c-3.27-.16-4.94 2.31-4.52 6.93c.42 4.62 3.14 11.63 12.6 11.45c10.92-.21 11.75-7.8 11.57-16.21c-.12-5.85 0-10.48-.31-10.69s-7.9-.41-8.32.01c-.42.42-.11 9.56-.21 11.76s.28 6.62-3.78 6.51c-3.15-.09-3.57-2.73-3.57-3.99c.01-1.25.74-5.56-3.46-5.77z" fill="#3f7377"></path><path d="M52.12 36.21l10.42-18.75s-20.55-2.54-38.8 11.63C.54 47.11 4.21 66.86 4.21 66.86s8.84-8.42 16.07-7.78s16.29 9.39 16.29 9.39l15.55-32.26z" fill="#937ef3"></path><path d="M65.06 23.21l-1.49-5.75s20.87-.23 36.42 9.96c26.73 17.52 23.78 37.08 23.78 37.08s-5.8-8.08-18.54-7.51s-17.4 11.94-17.4 11.94L65.06 23.21z" fill="#5547f4"></path><path d="M87.86 68.12S86.7 49 82.26 39.17c-8.1-17.95-19.25-21.42-19.25-21.42s-13.42 6.6-20.48 22.87s-5.85 27.76-5.85 27.76s10.86-12.41 26.67-10.7s24.51 10.44 24.51 10.44z" fill="#6e62ed"></path><path d="M59.11 18.23c-.14-.55-.02-7.9-.07-9.48c-.07-2.34 1.92-3.83 3.71-3.78c2.34.07 3.16 2.13 3.23 3.57s.08 9.52.07 9.62c-.09.84-1.32 1.64-3.5 1.65c-1.59 0-3.25-.82-3.44-1.58z" fill="#6ca4ab"></path><path d="M87.79 70.59c1.64-.1 8.19-11.36 18.47-11.26c13.95.14 15.75 7.39 17.21 6.64c1.61-.82-.76-3.83-2.87-6.01c-2.98-3.08-7.75-4.94-15.16-4.46c-10.79.7-17.75 10.27-17.75 10.27s-9.2-10.04-25.33-10.04c-15.6 0-25.67 11.1-25.67 11.1s-5.1-9.02-17.51-9.24c-10.96-.18-15.7 8.65-14.93 9.42c.77.77 6.61-6.23 14.8-5.88c11.26.48 15.2 9.89 17.36 9.94c2.15.05 10.56-11.3 26.15-11.03c16.74.29 23.69 10.65 25.23 10.55z" fill="#004dae"></path></svg>
                โครงการ “ร่มให้ยืม”
              </a>
            </li>

            
          </ul>
        </li>
        <li class="m-nav-item">
          <span class="m-nav-link" data-toggle="m-contact" style="cursor:pointer">
            ติดต่อเรา
            <svg class="m-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="transition:.3s"><path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7"/></svg>
          </span>
          <ul class="m-sub-menu" id="m-contact">
            <li><a href="https://www.facebook.com/share/1C1GjMhcid/" target="_blank" class="m-sub-link">Facebook</a></li>
            <li><a href="https://www.instagram.com/psc.council?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="m-sub-link">Instagram</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  `;
  document.body.appendChild(overlay);
  document.body.appendChild(menu);
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-icon"><img src="${SITE_ROOT}assets/images/logos/logo.png" alt="logo"></div>
            <div class="footer-logo-text">
              คณะกรรมการสภานักเรียน
              <span>โรงเรียนสิรินธรราชวิทยาลัย</span>
            </div>
          </div>
          <p class="footer-desc">
            คณะกรรมการสภานักเรียนโรงเรียนสิรินธรราชวิทยาลัยเป็นองค์กรของนักเรียนที่ดำเนินกิจกรรมเพื่อส่งเสริมประชาธิปไตยในโรงเรียน พัฒนาผู้เรียน และสร้างความสามัคคีในหมู่นักเรียน
          </p>
        </div>
        <div class="footer-col">
          <h4>ลิงก์ด่วน</h4>
          <div class="footer-links">
            <a href="${SITE_ROOT}index.html">หน้าแรก</a>
            <a href="${SITE_ROOT}announcements/index.html">ข่าวสาร</a>
            <a href="${SITE_ROOT}about/history.html">ประวัติคณะกรรมการสภานักเรียนฯ</a>
            <a href="${SITE_ROOT}about/committee.html">ทำเนียบองค์การบริหารนักเรียน</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>ที่อยู่</h4>
          <div class="footer-address">
            <p>6/8 หมู่ 5 ตำบลสนามจันทร์<br>อำเภอเมืองนครปฐม จังหวัดนครปฐม 73000</p>
            <p>6/8, Village No.5, Sanam Chan Sub-district,<br>Mueang Nakhon Pathom District,<br>Nakhon Pathom, 73000, Thailand</p>
            <p class="phone">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z"/></svg>
              034-250948
            </p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} คณะกรรมการสภานักเรียนโรงเรียนสิรินธรราชวิทยาลัย</span>
        <span>ออกแบบและพัฒนาโดยสภานักเรียน</span>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

// Auto-render on load
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderMobileMenu();
  renderFooter();
});
