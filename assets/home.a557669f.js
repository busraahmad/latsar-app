import{N as u,P as h,A as m}from"./AppLink.ef436aa8.js";import{_ as a,o as s,c as r,a as f,s as b,r as e,b as o,d as t,F as k}from"./index.38067626.js";const v={},g={id:"hero",class:"d-flex align-items-center animated fadeIn"},x=f('<div class="container animated fadeInUp"><div class="header-text m-auto"><h1><span>PORTAL</span> Aplikasi</h1><h2>Selamat datang di Portal Aplikasi BPS Kabupaten Buol</h2><div class="box-search"><div class="input-group"><input type="text" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" placeholder="Pencarian Aplikasi"><button class="btn btn-primary" type="button" id="inputGroupFileAddon04">Cari</button></div></div></div></div>',1),A=[x];function $(n,i){return s(),r("section",g,A)}const y=a(v,[["render",$]]),F=b(),P={components:{NavbarHeader:u,HeroHeader:y,PageFooter:h,AppLink:m},data(){return{urlSite:null}},mounted(){const n=F.links;this.urlSite=n}},S={class:"header-lg"},B={class:"pg-content py-5"},N={class:"link-portal section-bg py-5"};function L(n,i,G,H,c,V){const d=e("navbar-header"),p=e("hero-header"),l=e("app-link"),_=e("page-footer");return s(),r(k,null,[o("header",S,[t(d,{active:"home"}),t(p)]),o("div",B,[o("section",N,[t(l,{iconType:1,links:c.urlSite,menu:"topmenu"},null,8,["links"])])]),t(_)],64)}const T=a(P,[["render",L]]);export{T as default};
