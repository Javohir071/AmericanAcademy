<!DOCTYPE html>
<html lang="uz" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AMERICAN Academy</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&display=swap" rel="stylesheet">
<style>
:root{--gold:#c9a84c;--gold-light:#e8d08a;--sp:120px 80px;--tr:.4s ease;}
[data-theme=dark]{--bg:#0a0f1e;--bg2:#1e2535;--text:#f5f0e8;--muted:#8a8fa8;--dim:rgba(245,240,232,.65);--faint:rgba(245,240,232,.7);--brd:rgba(201,168,76,.15);--bsoft:rgba(201,168,76,.1);--card:#0a0f1e;--inp:rgba(10,15,30,.6);--hero:linear-gradient(135deg,rgba(10,15,30,.85),rgba(10,15,30,.55),rgba(10,15,30,.9));--navbg:rgba(10,15,30,.95);--mnbg:rgba(10,15,30,.98);--foot:#060a14;--qc:rgba(201,168,76,.04);}
[data-theme=light]{--bg:#f8f5ef;--bg2:#eee9df;--text:#1a1a2e;--muted:#6b6f82;--dim:rgba(26,26,46,.65);--faint:rgba(26,26,46,.7);--brd:rgba(201,168,76,.3);--bsoft:rgba(201,168,76,.2);--card:#fff;--inp:rgba(255,255,255,.9);--hero:linear-gradient(135deg,rgba(248,245,239,.8),rgba(248,245,239,.45),rgba(248,245,239,.85));--navbg:rgba(248,245,239,.96);--mnbg:rgba(248,245,239,.99);--foot:#e4ddd0;--qc:rgba(201,168,76,.07);}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;overflow-x:hidden;cursor:none;transition:background var(--tr),color var(--tr);}
.cursor{width:12px;height:12px;background:var(--gold);border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:9999;}
.cursor-ring{width:40px;height:40px;border:1px solid rgba(201,168,76,.5);border-radius:50%;position:fixed;top:0;left:0;pointer-events:none;z-index:9998;transition:transform .4s ease,width .3s,height .3s;}
[data-theme=dark] .cursor{mix-blend-mode:screen;}
nav{position:fixed;top:0;left:0;right:0;z-index:1000;display:flex;justify-content:space-between;align-items:center;padding:22px 60px;transition:all .5s;}
nav.sc{background:var(--navbg);backdrop-filter:blur(20px);border-bottom:1px solid var(--brd);padding:14px 60px;}
.logo{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;letter-spacing:3px;color:var(--text);text-decoration:none;}
.logo span{color:var(--gold);}
nav ul{display:flex;gap:28px;list-style:none;align-items:center;}
nav a{text-decoration:none;color:var(--faint);font-size:12px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;position:relative;transition:color .3s;}
nav a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1px;background:var(--gold);transition:width .3s;}
nav a:hover{color:var(--gold);}nav a:hover::after{width:100%;}
.nc{display:flex;align-items:center;gap:10px;}
.ls{display:flex;gap:3px;}
.lb{background:none;border:1px solid var(--brd);color:var(--muted);font-family:'DM Sans',sans-serif;font-size:10px;font-weight:600;letter-spacing:1.5px;padding:5px 9px;cursor:pointer;transition:all .3s;text-transform:uppercase;}
.lb:hover,.lb.active{background:var(--gold);border-color:var(--gold);color:#0a0f1e;}
.tt{background:none;border:1px solid var(--brd);width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s;font-size:15px;color:var(--muted);}
.tt:hover{border-color:var(--gold);color:var(--gold);}
.admin-nav-btn{background:none;border:1px solid rgba(201,168,76,.3);color:var(--muted);font-family:'DM Sans',sans-serif;font-size:10px;font-weight:600;letter-spacing:1.5px;padding:5px 12px;cursor:pointer;transition:all .3s;text-transform:uppercase;display:flex;align-items:center;gap:5px;}
.admin-nav-btn:hover{border-color:var(--gold);color:var(--gold);}
.hb{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;z-index:1100;background:none;border:none;}
.hb span{display:block;width:26px;height:2px;background:var(--text);transition:all .3s;}
.hb.active span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hb.active span:nth-child(2){opacity:0;}
.hb.active span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.mn{display:none;position:fixed;inset:0;background:var(--mnbg);z-index:1050;flex-direction:column;align-items:center;justify-content:center;gap:26px;}
.mn.open{display:flex;}
.mn a{text-decoration:none;color:var(--text);font-family:'Playfair Display',serif;font-size:26px;font-weight:700;letter-spacing:2px;transition:color .3s;}
.mn a:hover{color:var(--gold);}
.mnc{display:flex;gap:8px;margin-top:12px;align-items:center;flex-wrap:wrap;justify-content:center;}
.mnc .lb{font-size:11px;padding:7px 13px;}
.mnc .tt{width:40px;height:40px;font-size:16px;}
.gd{width:80px;height:1px;background:var(--gold);margin:0 auto 20px;}
.sl{font-size:10px;letter-spacing:5px;text-transform:uppercase;color:var(--gold);text-align:center;margin-bottom:12px;}
#home{height:100vh;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;}
.hbg{position:absolute;inset:0;background:url('img/Gallery2.jpg') center/cover no-repeat;transform:scale(1.1);animation:hz 20s ease-in-out infinite alternate;}
@keyframes hz{0%{transform:scale(1.1);}100%{transform:scale(1.2);}}
.hov{position:absolute;inset:0;background:var(--hero);transition:background var(--tr);}
.hc{position:relative;text-align:center;z-index:2;max-width:900px;padding:0 40px;}
.he{font-size:11px;letter-spacing:6px;text-transform:uppercase;color:var(--gold);margin-bottom:24px;opacity:0;animation:fu 1s .3s forwards;}
.ht{font-family:'Playfair Display',serif;font-size:clamp(48px,8vw,110px);font-weight:900;line-height:.95;color:var(--text);opacity:0;animation:fu 1s .5s forwards;transition:color var(--tr);}
.ht em{font-style:italic;color:var(--gold);}
.hs{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:300;color:var(--faint);margin:28px 0 48px;line-height:1.6;opacity:0;animation:fu 1s .7s forwards;}
.hbs{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;opacity:0;animation:fu 1s .9s forwards;}
.bp{background:var(--gold);color:#0a0f1e;padding:16px 44px;border:none;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-block;transition:all .3s;clip-path:polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%);}
.bp:hover{background:var(--gold-light);transform:translateY(-3px);box-shadow:0 20px 40px rgba(201,168,76,.3);}
.bo{background:transparent;color:var(--text);padding:16px 44px;border:1px solid var(--brd);font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;letter-spacing:2px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-block;transition:all .3s;}
.bo:hover{border-color:var(--gold);color:var(--gold);transform:translateY(-3px);}
.hscr{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0;animation:fi 1s 1.5s forwards;}
.hscr span{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);}
.sln{width:1px;height:60px;background:linear-gradient(to bottom,var(--gold),transparent);animation:sl2 2s ease-in-out infinite;}
@keyframes sl2{0%,100%{opacity:.4;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.2)}}
.pts{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:1;}
.pt{position:absolute;background:var(--gold);border-radius:50%;animation:pf linear infinite;opacity:0;}
@keyframes pf{0%{opacity:0;transform:translateY(100vh) scale(0)}10%{opacity:.6}90%{opacity:.3}100%{opacity:0;transform:translateY(-100px) scale(1.5)}}
.sb{background:var(--bg2);border-top:1px solid var(--bsoft);border-bottom:1px solid var(--bsoft);padding:60px 80px;display:flex;justify-content:center;gap:80px;flex-wrap:wrap;transition:background var(--tr);}
.si{text-align:center;opacity:0;transform:translateY(20px);transition:all .8s;}
.si.show{opacity:1;transform:translateY(0);}
.sn{font-family:'Playfair Display',serif;font-size:56px;font-weight:900;color:var(--gold);line-height:1;}
.slb{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);margin-top:8px;}
#about{padding:var(--sp);display:grid;grid-template-columns:1fr 1fr;gap:100px;align-items:center;position:relative;}
#about::before{content:'"';position:absolute;top:40px;left:60px;font-family:'Playfair Display',serif;font-size:400px;color:var(--qc);line-height:1;pointer-events:none;}
.aiw{position:relative;opacity:0;transform:translateX(-40px);transition:all 1s;}
.aiw.show{opacity:1;transform:translateX(0);}
.aiw img{width:100%;height:550px;object-fit:cover;display:block;}
.aif{position:absolute;top:-20px;left:-20px;right:20px;bottom:20px;border:1px solid rgba(201,168,76,.3);z-index:-1;}
.ab{position:absolute;bottom:-24px;right:-24px;background:var(--gold);color:#0a0f1e;width:120px;height:120px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:700;font-size:12px;text-align:center;letter-spacing:1px;}
.ab strong{font-size:28px;font-family:'Playfair Display',serif;}
.at{opacity:0;transform:translateX(40px);transition:all 1s .2s;}
.at.show{opacity:1;transform:translateX(0);}
.at h2{font-family:'Playfair Display',serif;font-size:52px;font-weight:700;line-height:1.1;margin-bottom:28px;color:var(--text);transition:color var(--tr);}
.at h2 em{color:var(--gold);font-style:italic;}
.at p{font-family:'Cormorant Garamond',serif;font-size:18px;line-height:1.9;color:var(--dim);margin-bottom:20px;}
.fl{list-style:none;margin-top:32px;display:grid;gap:14px;}
.fl li{display:flex;align-items:center;gap:14px;font-size:14px;color:var(--faint);}
.fl li::before{content:'';width:24px;height:1px;background:var(--gold);flex-shrink:0;}
#courses{padding:var(--sp);background:var(--bg2);position:relative;overflow:hidden;transition:background var(--tr);}
#courses::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent);}
.sh{text-align:center;margin-bottom:80px;}
.st{font-family:'Playfair Display',serif;font-size:52px;font-weight:700;color:var(--text);margin-top:16px;transition:color var(--tr);}
.cg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.cc{background:var(--card);padding:44px 36px 36px;position:relative;overflow:hidden;opacity:0;transform:translateY(30px);transition:opacity .7s,transform .7s,background var(--tr),box-shadow .3s;border-top:1px solid var(--bsoft);display:flex;flex-direction:column;gap:15px;}
.cc.show{opacity:1;transform:translateY(0);}
.cc::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:3px;background:var(--gold);transform:scaleX(0);transform-origin:left;transition:transform .4s;}
.cc:hover::after{transform:scaleX(1);}
.cc:hover{transform:translateY(-4px);box-shadow:0 24px 48px rgba(0,0,0,.15);}
.cn{position:absolute;top:24px;right:28px;font-family:'Playfair Display',serif;font-size:72px;font-weight:900;color:rgba(201,168,76,.06);line-height:1;pointer-events:none;}
.clv{font-size:9px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);font-weight:600;}
.ci{font-size:32px;display:block;line-height:1;}
.cc h3{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:var(--text);line-height:1.2;transition:color var(--tr);}
.cc p{font-family:'Cormorant Garamond',serif;font-size:15px;line-height:1.75;color:var(--muted);}
.cf{list-style:none;display:flex;flex-direction:column;gap:8px;flex:1;}
.cf li{font-size:12.5px;color:var(--dim);display:flex;align-items:center;gap:10px;}
.cf li::before{content:'';width:16px;height:1px;background:rgba(201,168,76,.5);flex-shrink:0;}
.cft{display:flex;justify-content:space-between;align-items:center;padding-top:20px;border-top:1px solid var(--bsoft);margin-top:auto;}
.cd{font-size:11px;color:var(--muted);}
.cnx{font-size:11px;color:var(--gold);font-weight:600;}
.cc--h{border-left:2px solid rgba(201,168,76,.3);}
.cc--g{border:1px solid rgba(201,168,76,.2);}
.cc--g::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--gold),transparent);z-index:1;}
.cc--g h3{color:var(--gold-light);}
#teachers{padding:var(--sp);}
.mt{display:grid;grid-template-columns:1fr 1fr;margin-bottom:60px;border:1px solid var(--brd);overflow:hidden;opacity:0;transform:translateY(30px);transition:all .9s;max-width:900px;}
.mt.show{opacity:1;transform:translateY(0);}
.mti{position:relative;overflow:hidden;height:500px;}
.mti img{width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform .6s;}
.mt:hover .mti img{transform:scale(1.05);}
.mti::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(10,15,30,.4));}
.mtin{background:var(--bg2);padding:60px 50px;display:flex;flex-direction:column;justify-content:center;border-left:3px solid var(--gold);transition:background var(--tr);}
.mtin .role{font-size:10px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:16px;}
.mtin h3{font-family:'Playfair Display',serif;font-size:42px;font-weight:700;color:var(--text);margin-bottom:20px;transition:color var(--tr);}
.mtin p{font-family:'Cormorant Garamond',serif;font-size:17px;line-height:1.8;color:var(--dim);margin-bottom:32px;}
.cl{display:inline-flex;align-items:center;gap:10px;color:var(--gold);text-decoration:none;font-size:12px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid rgba(201,168,76,.3);padding-bottom:4px;transition:gap .3s;}
.cl:hover{gap:16px;}
.cl::after{content:'→';}
.tg{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
.tc{background:var(--bg2);opacity:0;transform:translateY(20px);transition:opacity .6s,transform .6s,background var(--tr);overflow:hidden;display:flex;flex-direction:column;}
.tc.show{opacity:1;transform:translateY(0);}
.tc:hover{background:var(--card);box-shadow:0 12px 40px rgba(0,0,0,.18);}
.tp{width:100%;height:200px;overflow:hidden;position:relative;flex-shrink:0;background:var(--bg2);}
.tp img{width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform .5s;display:block;}
.tc:hover .tp img{transform:scale(1.07);}
.tph{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--gold),#0a0f1e);font-family:'Playfair Display',serif;font-size:52px;font-weight:700;color:#f5f0e8;}
.tp::after{content:'';position:absolute;bottom:0;left:0;right:0;height:50px;background:linear-gradient(to top,var(--bg2),transparent);pointer-events:none;transition:background var(--tr);}
.tc:hover .tp::after{background:linear-gradient(to top,var(--card),transparent);}
.tin{padding:20px 20px 24px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;flex:1;}
.tc h4{font-family:'Playfair Display',serif;font-size:16px;color:var(--text);transition:color var(--tr);line-height:1.3;}
.tlv{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);font-weight:600;}
.tcl{display:inline-flex;align-items:center;gap:5px;color:var(--muted);text-decoration:none;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;border-bottom:1px solid var(--bsoft);padding-bottom:2px;margin-top:8px;transition:color .3s,border-color .3s;}
.tcl:hover{color:var(--gold);border-color:var(--gold);}
.tcl::after{content:'→';}
#gallery{padding:var(--sp);background:var(--bg2);position:relative;overflow:hidden;transition:background var(--tr);}
#gallery::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent);}
.gg{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:auto auto;gap:4px;margin-top:60px;}
.gi{overflow:hidden;position:relative;opacity:0;transform:scale(.95);transition:all .8s;}
.gi.show{opacity:1;transform:scale(1);}
.gi:first-child{grid-row:span 2;height:580px;}
.gi img{width:100%;height:100%;object-fit:cover;transition:transform .6s;min-height:280px;}
.gi:hover img{transform:scale(1.06);}
.go{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,15,30,.7),transparent);opacity:0;transition:opacity .3s;}
.gi:hover .go{opacity:1;}
#news{padding:var(--sp);position:relative;overflow:hidden;}
#news::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent);}
.news-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:60px;}
.news-card{background:var(--bg2);border:1px solid var(--bsoft);overflow:hidden;opacity:0;transform:translateY(30px);transition:opacity .7s,transform .7s,background var(--tr),box-shadow .3s;display:flex;flex-direction:column;position:relative;}
.news-card.show{opacity:1;transform:translateY(0);}
.news-card:hover{transform:translateY(-4px);box-shadow:0 24px 48px rgba(0,0,0,.15);}
.news-card::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:3px;background:var(--gold);transform:scaleX(0);transform-origin:left;transition:transform .4s;}
.news-card:hover::after{transform:scaleX(1);}
.news-img-wrap{overflow:hidden;height:200px;background:var(--bg);position:relative;}
.news-img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s;}
.news-card:hover .news-img{transform:scale(1.04);}
.news-img-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:48px;background:linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.02));}
.news-body{padding:28px 28px 24px;display:flex;flex-direction:column;gap:12px;flex:1;}
.news-cat{font-size:9px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);font-weight:600;}
.news-title{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:var(--text);line-height:1.3;transition:color var(--tr);}
.news-text{font-family:'Cormorant Garamond',serif;font-size:15px;line-height:1.75;color:var(--muted);flex:1;}
.news-footer{display:flex;justify-content:space-between;align-items:center;padding-top:16px;border-top:1px solid var(--bsoft);margin-top:auto;}
.news-date{font-size:10px;letter-spacing:1px;color:var(--muted);}
.no-news{text-align:center;padding:80px 40px;color:var(--muted);font-family:'Cormorant Garamond',serif;font-size:20px;grid-column:1/-1;}
.no-news-icon{font-size:48px;display:block;margin-bottom:16px;}
.news-loading{text-align:center;padding:60px;color:var(--gold);grid-column:1/-1;font-size:13px;letter-spacing:3px;text-transform:uppercase;}
#register{padding:var(--sp);display:grid;grid-template-columns:1fr 1fr;gap:100px;align-items:center;}
.rl{opacity:0;transform:translateX(-30px);transition:all .9s;}
.rl.show{opacity:1;transform:translateX(0);}
.rl h2{font-family:'Playfair Display',serif;font-size:52px;font-weight:700;color:var(--text);line-height:1.1;margin:16px 0 28px;transition:color var(--tr);}
.rl h2 em{color:var(--gold);font-style:italic;}
.rl p{font-family:'Cormorant Garamond',serif;font-size:18px;line-height:1.8;color:var(--dim);margin-bottom:40px;}
.ci2{display:flex;flex-direction:column;gap:16px;}
.cit{display:flex;align-items:center;gap:16px;font-size:14px;color:var(--faint);}
.cic{width:44px;height:44px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
.rf{opacity:0;transform:translateX(30px);transition:all .9s .2s;}
.rf.show{opacity:1;transform:translateX(0);}
.fc{background:var(--bg2);padding:52px 48px;border:1px solid var(--bsoft);position:relative;transition:background var(--tr);}
.fc::before{content:'';position:absolute;top:0;left:0;width:60px;height:3px;background:var(--gold);}
.fg{margin-bottom:24px;}
.fg label{display:block;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:8px;}
.fg input,.fg select{width:100%;background:var(--inp);border:1px solid var(--bsoft);color:var(--text);padding:14px 18px;font-family:'DM Sans',sans-serif;font-size:14px;outline:none;transition:border-color .3s,background var(--tr),color var(--tr);appearance:none;cursor:pointer;}
.fg input::placeholder{color:var(--muted);}
.fg input:focus,.fg select:focus{border-color:var(--gold);}
.fg select option{background:var(--bg2);color:var(--text);}
.fr{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.sb2{width:100%;background:var(--gold);color:#0a0f1e;border:none;padding:16px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;cursor:pointer;transition:all .3s;margin-top:8px;}
.sb2:hover{background:var(--gold-light);transform:translateY(-2px);}
.bt{margin:14px 0 0;padding:0;background:var(--gold-light);width:100%;border:none;cursor:pointer;}
.bt a{text-decoration:none;display:block;padding:15px 25px;background:var(--gold-light);color:#0a0f1e;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-align:center;transition:background .3s;}
.bt a:hover{background:var(--gold);}
footer{background:var(--foot);border-top:1px solid var(--bsoft);padding:80px 80px 40px;transition:background var(--tr);}
.ftp{display:grid;grid-template-columns:2fr 1fr 1fr;gap:60px;padding-bottom:60px;border-bottom:1px solid var(--bsoft);margin-bottom:40px;}
.fb .logo{display:block;margin-bottom:20px;font-size:20px;}
.fb p{font-family:'Cormorant Garamond',serif;font-size:16px;line-height:1.8;color:var(--muted);max-width:300px;}
.fcol h5{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:24px;}
.fcol ul{list-style:none;display:flex;flex-direction:column;gap:12px;}
.fcol a{text-decoration:none;font-size:14px;color:var(--muted);transition:color .3s;}
.fcol a:hover{color:var(--text);}
.fbot{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--muted);letter-spacing:1px;}
.soc{display:flex;gap:20px;}
.soc a{width:40px;height:40px;border:1px solid var(--bsoft);display:flex;align-items:center;justify-content:center;color:var(--muted);text-decoration:none;font-size:16px;transition:all .3s;}
.soc a:hover{border-color:var(--gold);color:var(--gold);}
.toast{position:fixed;bottom:40px;right:40px;background:var(--gold);color:#0a0f1e;padding:16px 28px;font-weight:600;font-size:14px;z-index:9999;transform:translateY(100px);opacity:0;transition:all .4s;max-width:calc(100vw - 48px);}
.toast.show{transform:translateY(0);opacity:1;}
.loader{position:fixed;inset:0;background:var(--bg);z-index:99999;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:24px;transition:opacity .8s;}
.loader.hide{opacity:0;pointer-events:none;}
.lt{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;letter-spacing:8px;color:var(--text);}
.lt span{color:var(--gold);}
.lb2{width:200px;height:1px;background:rgba(201,168,76,.2);position:relative;overflow:hidden;}
.lb2::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:var(--gold);animation:ld 1.5s ease forwards;}
@keyframes ld{to{left:0}}
@keyframes fu{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes fi{to{opacity:1}}
.rv{opacity:0;transform:translateY(40px);transition:all .9s;}
.rv.show{opacity:1;transform:translateY(0);}
.admin-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:10000;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .3s;backdrop-filter:blur(8px);}
.admin-modal-overlay.open{opacity:1;pointer-events:all;}
.admin-modal{background:var(--bg2);border:1px solid var(--brd);padding:52px 48px;width:100%;max-width:440px;position:relative;transform:translateY(30px) scale(.97);transition:transform .4s;box-shadow:0 40px 80px rgba(0,0,0,.5);}
.admin-modal-overlay.open .admin-modal{transform:translateY(0) scale(1);}
.admin-modal::before{content:'';position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,transparent,var(--gold),transparent);}
.admin-modal-title{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:var(--text);margin-bottom:8px;}
.admin-modal-sub{font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:36px;}
.admin-modal-close{position:absolute;top:20px;right:20px;background:none;border:1px solid var(--bsoft);color:var(--muted);width:32px;height:32px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:all .3s;}
.admin-modal-close:hover{border-color:var(--gold);color:var(--gold);}
.admin-modal .fg input{background:var(--inp);border:1px solid var(--bsoft);color:var(--text);padding:14px 18px;font-family:'DM Sans',sans-serif;font-size:14px;outline:none;transition:border-color .3s;width:100%;}
.admin-modal .fg input:focus{border-color:var(--gold);}
.admin-modal .fg label{display:block;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:8px;}
.admin-modal .fg{margin-bottom:18px;}
.admin-login-btn{width:100%;background:var(--gold);color:#0a0f1e;border:none;padding:16px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;cursor:pointer;transition:all .3s;margin-top:8px;}
.admin-login-btn:hover{background:var(--gold-light);transform:translateY(-2px);}
.admin-login-error{background:rgba(231,76,60,.1);border:1px solid rgba(231,76,60,.3);color:#e74c3c;padding:12px 16px;font-size:13px;margin-top:12px;display:none;text-align:center;}
.admin-login-error.show{display:block;}
@media(max-width:1200px){.tg{grid-template-columns:repeat(3,1fr);}.cg{grid-template-columns:repeat(3,1fr);}.news-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:1024px){:root{--sp:90px 48px;}nav{padding:18px 40px;}nav.sc{padding:13px 40px;}nav ul{display:none;}.hb{display:flex;}.nc .ls,.nc .tt,.nc .admin-nav-btn{display:none;}.sb{gap:40px;padding:48px 40px;flex-wrap:wrap;}.sn{font-size:48px;}#about{grid-template-columns:1fr;gap:60px;padding:90px 48px;}.aiw img{height:420px;}.at h2{font-size:42px;}.cg{grid-template-columns:repeat(2,1fr);}.st{font-size:42px;}.sh{margin-bottom:60px;}.mt{grid-template-columns:1fr;max-width:100%;}.mti{height:360px;}.mtin{padding:40px 36px;}.mtin h3{font-size:34px;}.tg{grid-template-columns:repeat(3,1fr);}.tp{height:190px;}.gg{grid-template-columns:1fr 1fr;}.gi:first-child{grid-row:span 1;grid-column:span 2;height:340px;}.gi img{min-height:280px;}#register{grid-template-columns:1fr;gap:60px;padding:90px 48px;}.rl h2{font-size:42px;}.fc{padding:44px 40px;}footer{padding:60px 40px 32px;}.ftp{grid-template-columns:1fr 1fr;gap:40px;}.news-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:768px){:root{--sp:70px 22px;}body{cursor:auto;}.cursor,.cursor-ring{display:none;}nav{padding:15px 20px;}nav.sc{padding:12px 20px;}.logo{font-size:15px;letter-spacing:2px;}.he{font-size:10px;letter-spacing:4px;margin-bottom:18px;}.hc{padding:0 18px;}.hs{font-size:17px;margin:18px 0 32px;line-height:1.5;}.bp,.bo{padding:13px 28px;font-size:12px;}.hbs{gap:14px;}.sb{gap:28px;padding:36px 20px;}.sn{font-size:40px;}.slb{font-size:10px;letter-spacing:2px;}#about{padding:70px 22px;gap:48px;}.aiw img{height:280px;}.aif{top:-14px;left:-14px;right:14px;bottom:14px;}.ab{width:95px;height:95px;bottom:-14px;right:-8px;font-size:11px;}.ab strong{font-size:20px;}.at h2{font-size:32px;}.at p{font-size:16px;line-height:1.7;}.fl li{font-size:13px;}#courses{padding:70px 22px;}.cg{grid-template-columns:1fr;}.cc{padding:36px 28px 28px;}.cc h3{font-size:24px;}.sh{margin-bottom:44px;}.st{font-size:32px;}#teachers{padding:70px 22px;}.mti{height:260px;}.mtin{padding:28px 24px;}.mtin h3{font-size:26px;}.mtin p{font-size:14px;margin-bottom:20px;}.cl{font-size:11px;}.tg{grid-template-columns:repeat(2,1fr);gap:10px;}.tp{height:165px;}.tin{padding:14px 12px 18px;}.tc h4{font-size:13px;}.tlv{font-size:8px;}.tcl{font-size:8px;}#gallery{padding:70px 22px;}.gg{grid-template-columns:1fr;gap:6px;}.gi:first-child{grid-row:span 1;grid-column:span 1;height:230px;}.gi img{min-height:190px;}#register{padding:70px 22px;gap:44px;}.rl h2{font-size:32px;}.rl p{font-size:16px;}.ci2{gap:14px;}.cit{font-size:13px;}.cic{width:38px;height:38px;font-size:16px;}.fc{padding:32px 20px;}.fr{grid-template-columns:1fr;}.fg{margin-bottom:18px;}footer{padding:44px 22px 26px;}.ftp{grid-template-columns:1fr;gap:32px;}.fb p{font-size:14px;}.fbot{flex-direction:column;gap:14px;text-align:center;}.soc a{width:36px;height:36px;}.toast{bottom:20px;right:20px;font-size:13px;padding:14px 20px;}.news-grid{grid-template-columns:1fr;}.admin-modal{padding:36px 24px;margin:16px;}}
@media(max-width:480px){:root{--sp:56px 16px;}nav{padding:13px 14px;}.logo{font-size:13px;letter-spacing:1.5px;}.he{display:none;}.hs{font-size:15px;margin:14px 0 26px;}.hbs{flex-direction:column;align-items:center;gap:10px;}.bp,.bo{width:100%;max-width:260px;text-align:center;padding:13px 20px;font-size:11px;}.hscr{display:none;}.sb{gap:20px;padding:30px 14px;}.sn{font-size:36px;}.slb{font-size:9px;letter-spacing:1.5px;}.si{min-width:120px;}#about{padding:56px 16px;gap:40px;}.aiw img{height:240px;}.aif{display:none;}.ab{width:85px;height:85px;bottom:-12px;right:-6px;font-size:10px;}.ab strong{font-size:18px;}.at h2{font-size:26px;}.at p{font-size:15px;}.gd{width:60px;}.sl{font-size:9px;letter-spacing:3px;}#courses{padding:56px 16px;}.cg{grid-template-columns:1fr;gap:14px;}.cc{padding:28px 18px 22px;}.cn{font-size:56px;}.ci{font-size:26px;}.cc h3{font-size:21px;}.cc p{font-size:14px;}.cf li{font-size:12px;}.st{font-size:26px;}.sh{margin-bottom:36px;}#teachers{padding:56px 16px;}.mt{border:none;}.mti{height:240px;}.mtin{padding:24px 18px;border-left:2px solid var(--gold);}.mtin .role{font-size:9px;}.mtin h3{font-size:22px;margin-bottom:14px;}.mtin p{font-size:13px;margin-bottom:18px;}.tg{grid-template-columns:repeat(2,1fr);gap:8px;}.tp{height:150px;}.tin{padding:10px 10px 14px;}.tc h4{font-size:12px;}.tlv{font-size:7px;letter-spacing:1px;}.tcl{font-size:7px;margin-top:4px;}#gallery{padding:56px 16px;}.gg{grid-template-columns:1fr;gap:5px;}.gi:first-child{height:190px;}.gi img{min-height:170px;}#register{padding:56px 16px;gap:36px;}.rl h2{font-size:26px;}.rl p{font-size:15px;margin-bottom:28px;}.fc{padding:24px 14px;}.fc::before{width:40px;}.fg label{font-size:9px;}.fg input,.fg select{padding:12px 14px;font-size:13px;}.sb2{font-size:11px;letter-spacing:2px;padding:14px;}.bt a{font-size:11px;letter-spacing:2px;padding:13px;}footer{padding:36px 14px 22px;}.fb p{font-size:13px;}.fcol h5{font-size:9px;margin-bottom:16px;}.fcol a{font-size:13px;}.fbot{font-size:10px;gap:12px;}.soc{gap:12px;}.soc a{width:34px;height:34px;font-size:14px;}.mn a{font-size:20px;gap:20px;}.toast{right:12px;left:12px;bottom:16px;font-size:12px;padding:12px 16px;}}
</style>
</head>
<body>
<div class="loader" id="loader"><div class="lt">AMERICAN <span>Academy</span></div><div class="lb2"></div></div>
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cr"></div>

<div class="admin-modal-overlay" id="adminModalOverlay">
  <div class="admin-modal">
    <button class="admin-modal-close" onclick="closeAdminModal()">✕</button>
    <div class="admin-modal-sub">✦ Admin Kirish</div>
    <div class="admin-modal-title">Admin Panel</div>
    <div class="fg"><label>Ism</label><input type="text" id="adminFirstName" placeholder="Ismingiz" autocomplete="off"></div>
    <div class="fg"><label>Familya</label><input type="text" id="adminLastName" placeholder="Familyangiz" autocomplete="off"></div>
    <div class="fg"><label>Parol</label><input type="password" id="adminPassword" placeholder="••••••" autocomplete="off"></div>
    <button class="admin-login-btn" onclick="adminLogin()">Kirish</button>
    <div class="admin-login-error" id="adminLoginError">❌ Ism, familya yoki parol noto'g'ri!</div>
  </div>
</div>

<div class="mn" id="mn">
  <a href="#home" onclick="closeMN()" data-i="nav_home">Home</a>
  <a href="#about" onclick="closeMN()" data-i="nav_about">About</a>
  <a href="#courses" onclick="closeMN()" data-i="nav_courses">Courses</a>
  <a href="#teachers" onclick="closeMN()" data-i="nav_teachers">Teachers</a>
  <a href="#gallery" onclick="closeMN()" data-i="nav_gallery">Gallery</a>
  <a href="#news" onclick="closeMN()" data-i="nav_news">Yangiliklar</a>
  <a href="#register" onclick="closeMN()" data-i="nav_register">Register</a>
  <div class="mnc">
    <button class="lb" onclick="setLang('uz')">UZ</button>
    <button class="lb" onclick="setLang('en')">EN</button>
    <button class="lb" onclick="setLang('ru')">RU</button>
    <button class="tt" id="ttm" onclick="toggleTheme()">🌙</button>
    <button class="admin-nav-btn" onclick="openAdminModal();closeMN();" style="font-size:11px;padding:7px 13px;">🔐 Kirish</button>
  </div>
</div>

<nav id="nav">
  <a href="#home" class="logo">AMERICAN <span>Academy</span></a>
  <ul>
    <li><a href="#home" data-i="nav_home">Home</a></li>
    <li><a href="#about" data-i="nav_about">About</a></li>
    <li><a href="#courses" data-i="nav_courses">Courses</a></li>
    <li><a href="#teachers" data-i="nav_teachers">Teachers</a></li>
    <li><a href="#gallery" data-i="nav_gallery">Gallery</a></li>
    <li><a href="#news" data-i="nav_news">Yangiliklar</a></li>
    <li><a href="#register" data-i="nav_register">Register</a></li>
  </ul>
  <div class="nc">
    <div class="ls">
      <button class="lb" onclick="setLang('uz')">UZ</button>
      <button class="lb" onclick="setLang('en')">EN</button>
      <button class="lb" onclick="setLang('ru')">RU</button>
    </div>
    <button class="tt" id="tt" onclick="toggleTheme()">🌙</button>
    <button class="admin-nav-btn" onclick="openAdminModal()">🔐 Kirish</button>
  </div>
  <button class="hb" id="hb" onclick="toggleMN()"><span></span><span></span><span></span></button>
</nav>

<header id="home">
  <div class="hbg" id="heroBg"></div><div class="hov"></div>
  <div class="pts" id="pts"></div>
  <div class="hc">
    <p class="he" id="heroEyebrow" data-i="hero_eyebrow">✦ Xorazm, O'zbekiston ✦</p>
    <h1 class="ht">AMERICAN<br><em>Academy</em></h1>
    <p class="hs" id="heroSubtitle" data-i="hero_subtitle">Ingliz tili ta'limida mukammallik</p>
    <div class="hbs">
      <a href="#courses" class="bp" id="heroBtn1" data-i="hero_btn1">Kurslarni Ko'rish</a>
      <a href="#register" class="bo" id="heroBtn2" data-i="hero_btn2">Ro'yxatdan O'tish</a>
    </div>
  </div>
  <div class="hscr"><div class="sln"></div><span data-i="scroll">Pastga</span></div>
</header>

<div class="sb">
  <div class="si rv"><div class="sn" id="statGrad" data-count="500">0</div><div class="slb" id="statGradLbl" data-i="s_grad">Bitiruvchilar</div></div>
  <div class="si rv"><div class="sn" id="statExp" data-count="8">0</div><div class="slb" id="statExpLbl" data-i="s_exp">Yillik Tajriba</div></div>
  <div class="si rv"><div class="sn" id="statTeach" data-count="12">0</div><div class="slb" id="statTeachLbl" data-i="s_teach">O'qituvchilar</div></div>
  <div class="si rv"><div class="sn" id="statIelts" data-count="95">0</div><div class="slb" id="statIeltsLbl" data-i="s_ielts">% IELTS Muvaffaqiyati</div></div>
</div>

<section id="about">
  <div class="aiw rv">
    <div class="aif"></div>
    <img id="aboutImg" src="img/logo.jpg" alt="Academy">
    <div class="ab"><strong id="aboutBadge">8+</strong><span data-i="badge">Yillik Tajriba</span></div>
  </div>
  <div class="at rv">
    <p class="sl" data-i="about_lbl">✦ Biz Haqimizda</p><div class="gd"></div>
    <h2>Academy <em>Learning</em> Center</h2>
    <p id="aboutP1" data-i="about_p1">American Academy — bu ingliz tilini professional darajada o'rgatishga ixtisoslashgan zamonaviy o'quv markazi.</p>
    <p id="aboutP2" data-i="about_p2">Tajribali o'qituvchilar, zamonaviy metodlar va qulay muhit — bizning asosiy qadriyatlarimiz.</p>
    <ul class="fl" id="featuresList">
      <li data-i="f1">Professional va sertifikatlangan o'qituvchilar</li>
      <li data-i="f2">Kichik guruhlar — har biriga individual e'tibor</li>
      <li data-i="f3">CEFR standartlariga mos o'quv dasturi</li>
      <li data-i="f4">Moslashuvchan dars jadvali</li>
      <li data-i="f5">IELTS 7.0+ band natijasiga erishish kafolati</li>
    </ul>
  </div>
</section>

<section id="courses">
  <div class="sh rv"><p class="sl" data-i="c_lbl">✦ Kurslar</p><div class="gd"></div><h2 class="st" id="coursesTitle" data-i="c_title">Kurslarimiz</h2></div>
  <div class="cg" id="coursesGrid">
    <div class="cc rv" style="transition-delay:0s"><div class="cn">01</div><div class="clv">Level A1</div><div class="ci">🌱</div><h3 data-i="c1t">Boshlang'ich</h3><p data-i="c1d">Ingliz tilini mutlaqo noldan boshlovchilar uchun.</p><ul class="cf"><li data-i="c1f1">Harflar va tovushlar</li><li data-i="c1f2">100+ asosiy so'z boyligi</li><li data-i="c1f3">Tanishuv dialoglar</li><li data-i="c1f4">Present Simple grammatikasi</li></ul><div class="cft"><div class="cd" data-i="d34">⏱ 3–4 oy</div><div class="cnx">→ Elementary</div></div></div>
    <div class="cc rv" style="transition-delay:.08s"><div class="cn">02</div><div class="clv">Level A2</div><div class="ci">📖</div><h3 data-i="c2t">Elementary</h3><p data-i="c2d">Asosiy grammatika va kundalik hayot mavzularida gaplasha olish.</p><ul class="cf"><li data-i="c2f1">Past & Future zamonlar</li><li data-i="c2f2">500+ so'z boyligi</li><li data-i="c2f3">Listening & Speaking</li><li data-i="c2f4">Reading — qisqa matnlar</li></ul><div class="cft"><div class="cd" data-i="d34">⏱ 3–4 oy</div><div class="cnx">→ Pre-Intermediate</div></div></div>
    <div class="cc rv" style="transition-delay:.16s"><div class="cn">03</div><div class="clv">Level B1–</div><div class="ci">⚡</div><h3 data-i="c3t">Pre-Intermediate</h3><p data-i="c3d">Grammatikani chuqurlashtirish va og'zaki nutqni rivojlantirish.</p><ul class="cf"><li data-i="c3f1">Perfect zamonlar tizimi</li><li data-i="c3f2">1000+ leksika</li><li data-i="c3f3">Paragraph yozish</li><li data-i="c3f4">Ingliz filmlar + podkastlar</li></ul><div class="cft"><div class="cd" data-i="d34">⏱ 3–4 oy</div><div class="cnx">→ Intermediate</div></div></div>
    <div class="cc rv" style="transition-delay:.24s"><div class="cn">04</div><div class="clv">Level B1</div><div class="ci">🎯</div><h3 data-i="c4t">Intermediate</h3><p data-i="c4d">Erkin muloqot, academic writing va listening ko'nikmalarini professional darajaga olib chiqish.</p><ul class="cf"><li data-i="c4f1">Academic & Business inglizi</li><li data-i="c4f2">Essay writing texnikasi</li><li data-i="c4f3">Debate va prezentatsiya</li><li data-i="c4f4">2000+ leksika va idiomlar</li></ul><div class="cft"><div class="cd" data-i="d34">⏱ 3–4 oy</div><div class="cnx">→ Pre-IELTS</div></div></div>
    <div class="cc cc--h rv" style="transition-delay:.32s"><div class="cn">05</div><div class="clv">Level B2</div><div class="ci">🏆</div><h3 data-i="c5t">Pre-IELTS</h3><p data-i="c5d">IELTS imtihoniga tayyorlanishning birinchi bosqichi.</p><ul class="cf"><li data-i="c5f1">IELTS format bilan tanishuv</li><li data-i="c5f2">Band 5.0–6.0 maqsad</li><li data-i="c5f3">Strategiya va texnikalar</li><li data-i="c5f4">Mock test & tahlil</li></ul><div class="cft"><div class="cd" data-i="d34">⏱ 3–4 oy</div><div class="cnx">→ IELTS Standard</div></div></div>
    <div class="cc cc--g rv" style="transition-delay:.4s"><div class="cn">06</div><div class="clv">Level C1</div><div class="ci">✦</div><h3 data-i="c6t">IELTS Standard</h3><p data-i="c6d">Band 7.0–8.0 ga yo'naltirilgan intensiv professional kurs.</p><ul class="cf"><li data-i="c6f1">Band 7.0+ kafolati</li><li data-i="c6f2">Haqiqiy imtihon simulyatsiyasi</li><li data-i="c6f3">Shaxsiy dars rejasi</li><li data-i="c6f4">Speaking & Writing intensive</li></ul><div class="cft"><div class="cd" data-i="d4">⏱ 4 oy intensiv</div><div class="cnx">→ Band 7.0+</div></div></div>
  </div>
</section>

<section id="teachers">
  <div class="sh rv"><p class="sl" data-i="t_lbl">✦ O'qituvchilar</p><div class="gd"></div><h2 class="st" data-i="t_title">Bizning O'qituvchilar</h2></div>
  <div class="mt rv" id="headTeacherCard">
    <div class="mti"><img id="headImg" src="img/ogabek_ruzmetov.jpg" alt="Og'abek Ruzmetov"></div>
    <div class="mtin">
      <div class="role" id="headRole">✦ Bosh O'qituvchi va Asoschisi</div>
      <h3 id="headName">Og'abek Ruzmetov</h3>
      <p id="headDesc">Cambridge CELTA sertifikatiga ega, 10 yildan ortiq tajribali ingliz tili o'qituvchisi.</p>
      <a id="headCert" href="img/certs/ogabek-cert.jpg" target="_blank" class="cl" data-i="cert_lnk">Sertifikatni Ko'rish</a>
    </div>
  </div>
  <div class="tg" id="teachersGrid">
    <div class="tc rv" style="transition-delay:.05s"><div class="tp"><img src="img/teachers/aziz.jpg" alt="Aziz Toshmatov" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">A</div></div><div class="tin"><h4>Aziz Toshmatov</h4><span class="tlv">Beginner — Elementary</span><a href="img/certs/aziz-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.1s"><div class="tp"><img src="img/teachers/malika.jpg" alt="Malika Yusupova" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">M</div></div><div class="tin"><h4>Malika Yusupova</h4><span class="tlv">Pre-Intermediate</span><a href="img/certs/malika-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.15s"><div class="tp"><img src="img/teachers/sardor.jpg" alt="Sardor Nazarov" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">S</div></div><div class="tin"><h4>Sardor Nazarov</h4><span class="tlv">Intermediate</span><a href="img/certs/sardor-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.2s"><div class="tp"><img src="img/teachers/zulfiya.jpg" alt="Zulfiya Ahmedova" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">Z</div></div><div class="tin"><h4>Zulfiya Ahmedova</h4><span class="tlv">IELTS Specialist</span><a href="img/certs/zulfiya-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.25s"><div class="tp"><img src="img/teachers/jasur.jpg" alt="Jasur Mirzayev" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">J</div></div><div class="tin"><h4>Jasur Mirzayev</h4><span class="tlv">Conversation Club</span><a href="img/certs/jasur-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.3s"><div class="tp"><img src="img/teachers/nodira.jpg" alt="Nodira Xoliqova" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">N</div></div><div class="tin"><h4>Nodira Xoliqova</h4><span class="tlv">Academic Writing</span><a href="img/certs/nodira-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.35s"><div class="tp"><img src="img/teachers/suhrob.jpg" alt="Suhrob Mammedov" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">S</div></div><div class="tin"><h4>Suhrob Mammedov</h4><span class="tlv">Beginner</span><a href="img/certs/suhrob-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.4s"><div class="tp"><img src="img/teachers/davronbek.jpg" alt="Davronbek Ozodov" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">D</div></div><div class="tin"><h4>Davronbek Ozodov</h4><span class="tlv">Beginner</span><a href="img/certs/davronbek-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.45s"><div class="tp"><img src="img/teachers/saida.jpg" alt="Saida Xushnudova" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">S</div></div><div class="tin"><h4>Saida Xushnudova</h4><span class="tlv">Pre-IELTS</span><a href="img/certs/saida-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.5s"><div class="tp"><img src="img/teachers/munisa.jpg" alt="Munisa Sattorova" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">M</div></div><div class="tin"><h4>Munisa Sattorova</h4><span class="tlv">IELTS Standart</span><a href="img/certs/munisa-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.55s"><div class="tp"><img src="img/teachers/muhammadali.jpg" alt="Muhammadali Rasulov" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">M</div></div><div class="tin"><h4>Muhammadali Rasulov</h4><span class="tlv">Pre-Intermediate</span><a href="img/certs/muhammadali-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
    <div class="tc rv" style="transition-delay:.6s"><div class="tp"><img src="img/teachers/asad.jpg" alt="Asad Qodirov" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="tph" style="display:none">A</div></div><div class="tin"><h4>Asad Qodirov</h4><span class="tlv">IELTS Standart</span><a href="img/certs/asad-cert.jpg" target="_blank" class="tcl">Sertifikat →</a></div></div>
  </div>
</section>

<section id="gallery">
  <div class="sh rv"><p class="sl" data-i="g_lbl">✦ Galereya</p><div class="gd"></div><h2 class="st" data-i="g_title">Bizning Akademiya</h2></div>
  <div class="gg" id="galleryGrid">
    <div class="gi rv"><img src="img/Gallery2.jpg" alt="Academy"><div class="go"></div></div>
    <div class="gi rv" style="transition-delay:.1s"><img src="img/Gallery1.jpg" alt="Academy"><div class="go"></div></div>
    <div class="gi rv" style="transition-delay:.2s"><img src="img/Gallery3.jpg" alt="Academy"><div class="go"></div></div>
    <div class="gi rv" style="transition-delay:.3s"><img src="img/Gallery4.jpg" alt="Academy"><div class="go"></div></div>
    <div class="gi rv" style="transition-delay:.4s"><img src="img/Gallery6.jpg" alt="Academy"><div class="go"></div></div>
  </div>
</section>

<section id="news">
  <div class="sh rv"><p class="sl" data-i="news_lbl">✦ Yangiliklar</p><div class="gd"></div><h2 class="st" data-i="news_title">So'nggi Yangiliklar</h2></div>
  <div class="news-grid" id="newsGrid">
    <div class="news-loading">⏳ Yuklanmoqda...</div>
  </div>
</section>

<section id="register">
  <div class="rl rv">
    <p class="sl" data-i="r_lbl">✦ Ro'yxatdan O'ting</p>
    <div class="gd" style="margin:0 0 20px"></div>
    <h2>Start Your <em>Journey</em> Today</h2>
    <p data-i="r_desc">O'z orzuingizga qadam tashlang. Formani to'ldiring va biz siz bilan tez orada bog'lanamiz.</p>
    <div class="ci2">
      <div class="cit"><div class="cic">📍</div><span id="contactAddr" data-i="r_addr">O'zbekiston, Xorazm, Xonqa</span></div>
      <div class="cit"><div class="cic">📞</div><span id="contactPhone">+998 97 740 33 19</span></div>
      <div class="cit"><div class="cic">✉️</div><span id="contactEmail">info@americanacademy.uz</span></div>
      <div class="cit"><div class="cic">🕐</div><span id="contactHrs" data-i="r_hrs">Dush–Shan: 8:00 – 20:00</span></div>
    </div>
  </div>
  <div class="rf rv">
    <div class="fc">
      <form id="regForm">
        <div class="fr">
          <div class="fg"><label data-i="fn">Ism</label><input type="text" id="fn" data-ip="fnp" placeholder="Ismingiz" required></div>
          <div class="fg"><label data-i="fsn">Familya</label><input type="text" id="fsn" data-ip="fsnp" placeholder="Familyangiz" required></div>
        </div>
        <div class="fr">
          <div class="fg"><label data-i="fa">Yosh</label><input type="number" id="fa" data-ip="fap" placeholder="Yoshingiz" required min="5" max="70"></div>
          <div class="fg"><label data-i="fl">Daraja</label>
            <select id="fl" required>
              <option value="" disabled selected data-i="fsel">Tanlang</option>
              <option>Beginner</option><option>Elementary</option><option>Pre-Intermediate</option>
              <option>Intermediate</option><option>Pre-IELTS</option><option>IELTS Standard</option>
            </select>
          </div>
        </div>
        <div class="fg"><label data-i="fph">Telefon</label><input type="tel" id="fph" placeholder="+998 90 000 00 00" required></div>
        <button type="submit" class="sb2" id="sbtn" data-i="fsub">Ma'lumot Yuborish</button>
        <button type="button" class="bt"><a href="https://test-level-english.netlify.app/" target="_blank" data-i="ftest">English Test</a></button>
      </form>
    </div>
  </div>
</section>

<footer>
  <div class="ftp">
    <div class="fb"><a href="#home" class="logo">AMERICAN <span>Academy</span></a><p id="footerDesc" data-i="ft_desc">2016 yildan beri ingliz tili ta'limida mukammallik.</p></div>
    <div class="fcol"><h5 data-i="ft_nav">Navigatsiya</h5><ul>
      <li><a href="#home" data-i="nav_home">Home</a></li>
      <li><a href="#about" data-i="nav_about">About</a></li>
      <li><a href="#courses" data-i="nav_courses">Courses</a></li>
      <li><a href="#teachers" data-i="nav_teachers">Teachers</a></li>
      <li><a href="#gallery" data-i="nav_gallery">Gallery</a></li>
      <li><a href="#news" data-i="nav_news">Yangiliklar</a></li>
      <li><a href="#register" data-i="nav_register">Register</a></li>
    </ul></div>
    <div class="fcol"><h5 data-i="ft_con">Aloqa</h5><ul>
      <li><a id="footIg" href="https://instagram.com/AMERICAN_ACADEMY_UZB">📷 Instagram</a></li>
      <li><a id="footYt" href="https://youtube.com/@americanacademyuzb">▶️ YouTube</a></li>
      <li><a id="footTg" href="https://t.me/AMERICAN_ACADEMY_UZB">✈️ Telegram</a></li>
      <li><a id="footPhone" href="tel:+998977403319">📞 +998 97 740 33 19</a></li>
    </ul></div>
  </div>
  <div class="fbot">
    <span id="footerCopy" data-i="ft_copy">© 2026 Javlonboyev Javohir. Barcha huquqlar himoyalangan.</span>
    <div class="soc">
      <a id="socIg" href="https://instagram.com/AMERICAN_ACADEMY_UZB">📷</a>
      <a id="socTg" href="https://t.me/AMERICAN_ACADEMY_UZB">✈️</a>
      <a id="socYt" href="https://youtube.com/@americanacademyuzb">▶️</a>
    </div>
  </div>
</footer>
<div class="toast" id="toast"></div>

<!-- ════════════════════════════════════════════
  🔥 FIREBASE — SHU 6 QATORNI O'ZGARTIRING
  console.firebase.google.com → Project Settings
  → Your apps → Web → SDK setup → Config
════════════════════════════════════════════ -->
<script type="module">
import { initializeApp }      from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, onSnapshot, query, orderBy, doc }
                               from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ── 1. YANGILIKLAR (news) ──────────────────────────────
onSnapshot(
  query(collection(db, "news"), orderBy("createdAt", "desc")),
  (snap) => { window._renderNews(snap.docs.map(d => ({ id: d.id, ...d.data() }))); },
  () => window._renderNews([])
);

// ── 2. SITE SETTINGS — barcha bo'limlar ───────────────
onSnapshot(doc(db, "settings", "main"), (snap) => {
  if (!snap.exists()) return;
  const d = snap.data();
  const lang = localStorage.getItem('aa_lang') || 'uz';

  // STATS
  if (d.stats) {
    const sg = document.getElementById('statGrad');
    const se = document.getElementById('statExp');
    const st = document.getElementById('statTeach');
    const si = document.getElementById('statIelts');
    if (sg && d.stats.grad)  { sg.dataset.count = d.stats.grad;  }
    if (se && d.stats.exp)   { se.dataset.count = d.stats.exp;   }
    if (st && d.stats.teach) { st.dataset.count = d.stats.teach; }
    if (si && d.stats.ielts) { si.dataset.count = d.stats.ielts; }
  }

  // ABOUT
  if (d.about) {
    const img = document.getElementById('aboutImg');
    const badge = document.getElementById('aboutBadge');
    if (img && d.about.img)   img.src = d.about.img;
    if (badge && d.about.badge) badge.textContent = d.about.badge + '+';

    // T obyektini yangilash (til tizimi uchun)
    if (d.about.p1_uz) window._T.uz.about_p1 = d.about.p1_uz;
    if (d.about.p1_en) window._T.en.about_p1 = d.about.p1_en;
    if (d.about.p2_uz) window._T.uz.about_p2 = d.about.p2_uz;
    if (d.about.features && d.about.features.length) {
      const fl = document.getElementById('featuresList');
      if (fl) fl.innerHTML = d.about.features.map(f => `<li>${f}</li>`).join('');
    }
  }

  // HERO
  if (d.hero) {
    if (d.hero.ey_uz)  window._T.uz.hero_eyebrow  = d.hero.ey_uz;
    if (d.hero.ey_en)  window._T.en.hero_eyebrow  = d.hero.ey_en;
    if (d.hero.ey_ru)  window._T.ru.hero_eyebrow  = d.hero.ey_ru;
    if (d.hero.sub_uz) window._T.uz.hero_subtitle = d.hero.sub_uz;
    if (d.hero.sub_en) window._T.en.hero_subtitle = d.hero.sub_en;
    if (d.hero.sub_ru) window._T.ru.hero_subtitle = d.hero.sub_ru;
    if (d.hero.b1_uz)  window._T.uz.hero_btn1     = d.hero.b1_uz;
    if (d.hero.b2_uz)  window._T.uz.hero_btn2     = d.hero.b2_uz;
    if (d.hero.b1_en)  window._T.en.hero_btn1     = d.hero.b1_en;
    if (d.hero.b2_en)  window._T.en.hero_btn2     = d.hero.b2_en;
    if (d.hero.bgImg) {
      const bg = document.getElementById('heroBg');
      if (bg) bg.style.backgroundImage = `url('${d.hero.bgImg}')`;
    }
  }

  // COURSES
  if (d.courses) {
    if (d.courses.tit_uz) window._T.uz.c_title = d.courses.tit_uz;
    if (d.courses.tit_en) window._T.en.c_title = d.courses.tit_en;
    if (d.courses.list && d.courses.list.length) {
      const grid = document.getElementById('coursesGrid');
      if (grid) {
        grid.innerHTML = d.courses.list.map((c, i) => `
          <div class="cc rv" style="transition-delay:${i*0.08}s">
            <div class="cn">${c.num||String(i+1).padStart(2,'0')}</div>
            <div class="clv">Level ${c.level||''}</div>
            <div class="ci">${c.icon||'⭐'}</div>
            <h3>${c.title}</h3>
            <p>${c.desc}</p>
            <div class="cft"><div class="cd">⏱ ${c.dur}</div><div class="cnx">→ ${c.next}</div></div>
          </div>`).join('');
        grid.querySelectorAll('.cc').forEach(el => ro.observe(el));
      }
    }
  }

  // TEACHERS
  if (d.teachers) {
    const hn = document.getElementById('headName');
    const hr = document.getElementById('headRole');
    const hd = document.getElementById('headDesc');
    const hi = document.getElementById('headImg');
    const hc = document.getElementById('headCert');
    if (hn && d.teachers.name) hn.textContent = d.teachers.name;
    if (hr && d.teachers.role) hr.textContent = d.teachers.role;
    if (hd && d.teachers.desc) hd.textContent = d.teachers.desc;
    if (hi && d.teachers.img)  hi.src = d.teachers.img;
    if (hc && d.teachers.cert) hc.href = d.teachers.cert;

    if (d.teachers.list && d.teachers.list.length) {
      const tg = document.getElementById('teachersGrid');
      if (tg) {
        tg.innerHTML = d.teachers.list.map((t, i) => `
          <div class="tc rv" style="transition-delay:${i*0.05}s">
            <div class="tp">
              ${t.img ? `<img src="${t.img}" alt="${t.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : ''}
              <div class="tph" style="display:${t.img?'none':'flex'}">${t.name.charAt(0)}</div>
            </div>
            <div class="tin">
              <h4>${t.name}</h4>
              <span class="tlv">${t.level}</span>
              <a href="${t.cert||'#'}" target="_blank" class="tcl">Sertifikat →</a>
            </div>
          </div>`).join('');
        tg.querySelectorAll('.tc').forEach(el => ro.observe(el));
      }
    }
  }

  // GALLERY
  if (d.gallery && d.gallery.items && d.gallery.items.length) {
    const gg = document.getElementById('galleryGrid');
    if (gg) {
      gg.innerHTML = d.gallery.items.map((img, i) => `
        <div class="gi rv" style="transition-delay:${i*0.1}s${i===0?';grid-row:span 2;height:580px':''}">
          <img src="${img}" alt="Academy">
          <div class="go"></div>
        </div>`).join('');
      gg.querySelectorAll('.gi').forEach(el => ro.observe(el));
    }
  }

  // CONTACT
  if (d.contact) {
    const ca = document.getElementById('contactAddr');
    const cp = document.getElementById('contactPhone');
    const ce = document.getElementById('contactEmail');
    const ch = document.getElementById('contactHrs');
    const fp = document.getElementById('footPhone');
    const fi = document.getElementById('footIg');
    const ft = document.getElementById('footTg');
    const fy = document.getElementById('footYt');
    const si = document.getElementById('socIg');
    const st2= document.getElementById('socTg');
    const sy = document.getElementById('socYt');
    if (ca && d.contact.addr_uz) { window._T.uz.r_addr = d.contact.addr_uz; window._T.en.r_addr = d.contact.addr_en||d.contact.addr_uz; }
    if (cp && d.contact.phone)   { cp.textContent = d.contact.phone; fp.textContent = '📞 ' + d.contact.phone; fp.href = 'tel:' + d.contact.phone.replace(/\s/g,''); }
    if (ce && d.contact.email)   ce.textContent = d.contact.email;
    if (ch && d.contact.hrs)     window._T.uz.r_hrs = d.contact.hrs;
    if (fi && d.contact.ig)      { fi.href = d.contact.ig; if(si) si.href = d.contact.ig; }
    if (ft && d.contact.tg)      { ft.href = d.contact.tg; if(st2) st2.href = d.contact.tg; }
    if (fy && d.contact.yt)      { fy.href = d.contact.yt; if(sy) sy.href = d.contact.yt; }
  }

  // FOOTER
  if (d.footer) {
    if (d.footer.desc_uz) window._T.uz.ft_desc = d.footer.desc_uz;
    if (d.footer.desc_en) window._T.en.ft_desc = d.footer.desc_en;
    if (d.footer.copy)    { window._T.uz.ft_copy = d.footer.copy; window._T.en.ft_copy = d.footer.copy; window._T.ru.ft_copy = d.footer.copy; }
  }

  // Ma'lumotlar yuklangandan keyin tilni qayta qo'llaymiz
  const cl = localStorage.getItem('aa_lang') || 'uz';
  if (window._setLang) window._setLang(cl);
});
</script>

<script>
const T={uz:{nav_home:"Home",nav_about:"About",nav_courses:"Courses",nav_teachers:"Teachers",nav_gallery:"Gallery",nav_news:"Yangiliklar",nav_register:"Register",hero_eyebrow:"✦ Xorazm, O'zbekiston ✦",hero_subtitle:"Ingliz tili ta'limida mukammallik — Ambitsiya mahoratga aylanadigan joy",hero_btn1:"Kurslarni Ko'rish",hero_btn2:"Ro'yxatdan O'tish",scroll:"Pastga",s_grad:"Bitiruvchilar",s_exp:"Yillik Tajriba",s_teach:"O'qituvchilar",s_ielts:"% IELTS Muvaffaqiyati",badge:"Yillik Tajriba",about_lbl:"✦ Biz Haqimizda",about_p1:"American Academy — ingliz tilini professional darajada o'rgatishga ixtisoslashgan zamonaviy o'quv markazi.",about_p2:"Tajribali o'qituvchilar, zamonaviy metodlar va qulay muhit — bizning asosiy qadriyatlarimiz.",f1:"Professional va sertifikatlangan o'qituvchilar",f2:"Kichik guruhlar — individual e'tibor",f3:"CEFR standartlariga mos o'quv dasturi",f4:"Moslashuvchan dars jadvali",f5:"IELTS 7.0+ band kafolati",c_lbl:"✦ Kurslar",c_title:"Kurslarimiz",t_lbl:"✦ O'qituvchilar",t_title:"Bizning O'qituvchilar",head_role:"✦ Bosh O'qituvchi va Asoschisi",head_desc:"Cambridge CELTA sertifikatiga ega, 10 yildan ortiq tajribali ingliz tili o'qituvchisi.",cert_lnk:"Sertifikatni Ko'rish",cv:"Sertifikat →",g_lbl:"✦ Galereya",g_title:"Bizning Akademiya",news_lbl:"✦ Yangiliklar",news_title:"So'nggi Yangiliklar",r_lbl:"✦ Ro'yxatdan O'ting",r_desc:"O'z orzuingizga qadam tashlang.",r_addr:"O'zbekiston, Xorazm, Xonqa",r_hrs:"Dush–Shan: 8:00 – 20:00",fn:"Ism",fnp:"Ismingiz",fsn:"Familya",fsnp:"Familyangiz",fa:"Yosh",fap:"Yoshingiz",fl:"Daraja",fsel:"Tanlang",fph:"Telefon",fsub:"Ma'lumot Yuborish",ftest:"Ingliz Tili Testi",ft_desc:"2016 yildan beri ingliz tili ta'limida mukammallik.",ft_nav:"Navigatsiya",ft_con:"Aloqa",ft_copy:"© 2026 Javlonboyev Javohir. Barcha huquqlar himoyalangan.",tok:"✅ Muvaffaqiyatli yuborildi!",terr:"❌ Xatolik yuz berdi.",tnet:"❌ Internet xatoligi.",tsend:"Yuborilmoqda..."},en:{nav_home:"Home",nav_about:"About",nav_courses:"Courses",nav_teachers:"Teachers",nav_gallery:"Gallery",nav_news:"News",nav_register:"Register",hero_eyebrow:"✦ Khorezm, Uzbekistan ✦",hero_subtitle:"Excellence in English Education — Where ambition meets mastery",hero_btn1:"Explore Courses",hero_btn2:"Register Now",scroll:"Scroll",s_grad:"Graduates",s_exp:"Years Experience",s_teach:"Teachers",s_ielts:"% IELTS Success",badge:"Years of Experience",about_lbl:"✦ About Us",about_p1:"American Academy is a modern educational center specializing in professional English language training.",about_p2:"Experienced teachers, modern methods and comfortable environment — our core values.",f1:"Professional and certified teachers",f2:"Small groups — individual attention",f3:"Curriculum aligned with CEFR standards",f4:"Flexible class schedule",f5:"Guaranteed IELTS 7.0+ band result",c_lbl:"✦ Courses",c_title:"Our Courses",t_lbl:"✦ Teachers",t_title:"Our Teachers",head_role:"✦ Head Teacher & Founder",head_desc:"Holder of Cambridge CELTA certificate, English teacher with 10+ years experience.",cert_lnk:"View Certificate",cv:"Certificate →",g_lbl:"✦ Gallery",g_title:"Our Academy",news_lbl:"✦ News",news_title:"Latest News",r_lbl:"✦ Register",r_desc:"Take a step toward your dream.",r_addr:"Uzbekistan, Khorezm, Khonqa",r_hrs:"Mon–Sat: 8:00 – 20:00",fn:"First Name",fnp:"Your first name",fsn:"Last Name",fsnp:"Your last name",fa:"Age",fap:"Your age",fl:"Level",fsel:"Select level",fph:"Phone Number",fsub:"Send Information",ftest:"English Level Test",ft_desc:"Excellence in English education since 2016.",ft_nav:"Navigation",ft_con:"Connect",ft_copy:"© 2026 Javlonboyev Javohir. All rights reserved.",tok:"✅ Sent successfully!",terr:"❌ An error occurred.",tnet:"❌ Network error.",tsend:"Sending..."},ru:{nav_home:"Главная",nav_about:"О нас",nav_courses:"Курсы",nav_teachers:"Учителя",nav_gallery:"Галерея",nav_news:"Новости",nav_register:"Записаться",hero_eyebrow:"✦ Хорезм, Узбекистан ✦",hero_subtitle:"Совершенство в обучении английскому",hero_btn1:"Смотреть курсы",hero_btn2:"Записаться",scroll:"Вниз",s_grad:"Выпускников",s_exp:"Лет опыта",s_teach:"Учителей",s_ielts:"% Успех IELTS",badge:"Лет опыта",about_lbl:"✦ О нас",about_p1:"American Academy — современный образовательный центр.",about_p2:"Опытные преподаватели, современные методы — наши ценности.",f1:"Профессиональные учителя",f2:"Малые группы",f3:"Программа CEFR",f4:"Гибкое расписание",f5:"Гарантия IELTS 7.0+",c_lbl:"✦ Курсы",c_title:"Наши Курсы",t_lbl:"✦ Учителя",t_title:"Наши Учителя",head_role:"✦ Главный учитель",head_desc:"Cambridge CELTA, 10+ лет опыта.",cert_lnk:"Сертификат",cv:"Сертификат →",g_lbl:"✦ Галерея",g_title:"Наша Академия",news_lbl:"✦ Новости",news_title:"Последние Новости",r_lbl:"✦ Записаться",r_desc:"Сделайте шаг к своей мечте.",r_addr:"Узбекистан, Хорезм, Хонка",r_hrs:"Пн–Сб: 8:00 – 20:00",fn:"Имя",fnp:"Ваше имя",fsn:"Фамилия",fsnp:"Ваша фамилия",fa:"Возраст",fap:"Ваш возраст",fl:"Уровень",fsel:"Выберите",fph:"Телефон",fsub:"Отправить",ftest:"Тест по английскому",ft_desc:"Совершенство с 2016 года.",ft_nav:"Навигация",ft_con:"Контакты",ft_copy:"© 2026 Javlonboyev Javohir. Все права защищены.",tok:"✅ Данные отправлены!",terr:"❌ Произошла ошибка.",tnet:"❌ Ошибка сети.",tsend:"Отправка..."}};

// Global T referenci (Firebase module uchun)
window._T = T;

let lang = localStorage.getItem('aa_lang') || 'uz';
let theme = localStorage.getItem('aa_theme') || 'dark';
document.documentElement.setAttribute('data-theme', theme);

function setLang(l) {
  lang = l;
  localStorage.setItem('aa_lang', l);
  document.documentElement.lang = l;
  const d = T[l];
  document.querySelectorAll('[data-i]').forEach(el => {
    const k = el.getAttribute('data-i');
    if (d[k] !== undefined) el.textContent = d[k];
  });
  document.querySelectorAll('[data-ip]').forEach(el => {
    const k = el.getAttribute('data-ip');
    if (d[k] !== undefined) el.placeholder = d[k];
  });
  const opt = document.querySelector('#fl option[value=""]');
  if (opt) opt.textContent = d.fsel || 'Select';
  document.querySelectorAll('.lb').forEach(b => b.classList.toggle('active', b.textContent.trim() === l.toUpperCase()));
}
window._setLang = setLang;

function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('aa_theme', theme);
  updateIcons();
}
function updateIcons() {
  const ic = theme === 'dark' ? '🌙' : '☀️';
  document.getElementById('tt').textContent = ic;
  document.getElementById('ttm').textContent = ic;
}
function toggleMN() { document.getElementById('mn').classList.toggle('open'); document.getElementById('hb').classList.toggle('active'); }
function closeMN()  { document.getElementById('mn').classList.remove('open'); document.getElementById('hb').classList.remove('active'); }
function openAdminModal()  { document.getElementById('adminModalOverlay').classList.add('open'); document.getElementById('adminFirstName').focus(); }
function closeAdminModal() { document.getElementById('adminModalOverlay').classList.remove('open'); document.getElementById('adminLoginError').classList.remove('show'); document.getElementById('adminFirstName').value=''; document.getElementById('adminLastName').value=''; document.getElementById('adminPassword').value=''; }
function adminLogin() {
  const fn = document.getElementById('adminFirstName').value.trim();
  const ln = document.getElementById('adminLastName').value.trim();
  const pw = document.getElementById('adminPassword').value.trim();
  if (fn === 'Javohir' && ln === 'Javlonboyev' && pw === '098246') { closeAdminModal(); window.open('admin.html', '_blank'); }
  else { document.getElementById('adminLoginError').classList.add('show'); document.getElementById('adminPassword').value = ''; document.getElementById('adminPassword').focus(); }
}
document.getElementById('adminModalOverlay').addEventListener('click', function(e) { if (e.target === this) closeAdminModal(); });
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && document.getElementById('adminModalOverlay').classList.contains('open')) adminLogin();
  if (e.key === 'Escape' && document.getElementById('adminModalOverlay').classList.contains('open')) closeAdminModal();
});

// News renderer
window._renderNews = function(news) {
  const grid = document.getElementById('newsGrid');
  if (!news || !news.length) {
    grid.innerHTML = '<div class="no-news"><span class="no-news-icon">📰</span>Hozircha yangiliklar yo\'q</div>';
    return;
  }
  grid.innerHTML = news.map((n, i) => `
    <div class="news-card rv" style="transition-delay:${i * 0.08}s">
      <div class="news-img-wrap">
        ${n.img ? `<img class="news-img" src="${n.img}" alt="${n.title}" onerror="this.parentElement.innerHTML='<div class=news-img-placeholder>📰</div>'">` : '<div class="news-img-placeholder">📰</div>'}
      </div>
      <div class="news-body">
        <span class="news-cat">${n.cat || '✦ Yangilik'}</span>
        <div class="news-title">${n.title}</div>
        <div class="news-text">${n.text}</div>
        <div class="news-footer"><span class="news-date">${n.date || ''}</span></div>
      </div>
    </div>`).join('');
  grid.querySelectorAll('.news-card').forEach(el => ro.observe(el));
};

window.addEventListener('DOMContentLoaded', () => { updateIcons(); setLang(lang); });
window.addEventListener('load', () => {
  setTimeout(() => { const l = document.getElementById('loader'); l.classList.add('hide'); setTimeout(() => l.remove(), 800); }, 1600);
});

const cur = document.getElementById('cursor'), ring = document.getElementById('cr');
if (cur) {
  document.addEventListener('mousemove', e => { cur.style.transform = `translate(${e.clientX - 6}px,${e.clientY - 6}px)`; ring.style.transform = `translate(${e.clientX - 20}px,${e.clientY - 20}px)`; });
  document.querySelectorAll('a,button,input,select').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.style.width = '60px'; ring.style.height = '60px'; });
    el.addEventListener('mouseleave', () => { ring.style.width = '40px'; ring.style.height = '40px'; });
  });
}
window.addEventListener('scroll', () => document.getElementById('nav').classList.toggle('sc', scrollY > 50));

const pe = document.getElementById('pts');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'pt';
  p.style.cssText = `left:${Math.random() * 100}%;animation-duration:${Math.random() * 15 + 10}s;animation-delay:${Math.random() * 10}s;width:${Math.random() * 3 + 1}px;height:${Math.random() * 3 + 1}px;`;
  pe.appendChild(p);
}

const ro = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) x.target.classList.add('show'); }), { threshold: .1 });
document.querySelectorAll('.rv,.si,.aiw,.at,.cc,.mt,.tc,.gi,.rl,.rf,.news-card').forEach(el => ro.observe(el));

function animCount(el, target) {
  let c = 0;
  const step = target / 60;
  const t = setInterval(() => {
    c += step;
    if (c >= target) { el.textContent = target + (target === 95 ? '%' : target === 500 ? '+' : ''); clearInterval(t); }
    else el.textContent = Math.floor(c) + (target === 95 ? '%' : target === 500 ? '+' : '');
  }, 16);
}
const co = new IntersectionObserver(e => e.forEach(x => {
  if (x.isIntersecting) {
    const sn = x.target.querySelector('.sn');
    if (sn && sn.dataset.count) { animCount(sn, parseInt(sn.dataset.count)); co.unobserve(x.target); }
  }
}), { threshold: .5 });
document.querySelectorAll('.si').forEach(s => co.observe(s));

function showToast(msg, type = 'ok') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.background = type === 'err' ? '#e74c3c' : 'var(--gold)';
  t.style.color = type === 'err' ? '#fff' : '#0a0f1e';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

const BOT = '8731128643:AAEvv8wHSFZwa39KdcpAQ-nbak9Jtn8nlcU', CID = '8424842589';
document.getElementById('regForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const d = T[lang];
  const btn = document.getElementById('sbtn');
  btn.textContent = d.tsend;
  btn.disabled = true;
  const name = document.getElementById('fn').value, surname = document.getElementById('fsn').value, age = document.getElementById('fa').value, level = document.getElementById('fl').value, phone = document.getElementById('fph').value;
  const msg = `🎓 Yangi O'quvchi!\n\n👤 ${name} ${surname}\n🎂 ${age} yosh\n📚 ${level}\n📞 ${phone}\n📅 ${new Date().toLocaleString('uz-UZ')}`;
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT}/sendMessage`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ chat_id: CID, text: msg }) });
    const data = await res.json();
    if (data.ok) { showToast(d.tok); this.reset(); }
    else showToast(d.terr, 'err');
  } catch { showToast(d.tnet, 'err'); }
  btn.textContent = d.fsub;
  btn.disabled = false;
});
</script>
</body>
</html>

































<!DOCTYPE html>
<html lang="uz" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Panel — AMERICAN Academy</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{--gold:#c9a84c;--gold-light:#e8d08a;--tr:.3s ease;}
[data-theme=dark]{--bg:#07090f;--bg2:#0f1420;--bg3:#161d2e;--text:#f5f0e8;--muted:#8a8fa8;--brd:rgba(201,168,76,.18);--bsoft:rgba(201,168,76,.1);--inp:rgba(10,15,30,.7);--danger:#e74c3c;--dangerBg:rgba(231,76,60,.1);}
[data-theme=light]{--bg:#f4f1eb;--bg2:#ede8de;--bg3:#fff;--text:#1a1a2e;--muted:#6b6f82;--brd:rgba(201,168,76,.3);--bsoft:rgba(201,168,76,.18);--inp:rgba(255,255,255,.9);--danger:#c0392b;--dangerBg:rgba(192,57,43,.1);}
*{margin:0;padding:0;box-sizing:border-box;}
body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;min-height:100vh;transition:background var(--tr),color var(--tr);}
.sidebar{position:fixed;top:0;left:0;width:250px;height:100vh;background:var(--bg2);border-right:1px solid var(--brd);display:flex;flex-direction:column;z-index:100;transition:transform .3s,background var(--tr);}
.s-logo{padding:24px 20px 18px;border-bottom:1px solid var(--bsoft);}
.s-logo-txt{font-family:'Playfair Display',serif;font-size:15px;font-weight:700;letter-spacing:2px;color:var(--text);}
.s-logo-txt span{color:var(--gold);}
.s-badge{font-size:9px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-top:3px;display:block;}
.s-nav{flex:1;padding:12px 0;overflow-y:auto;}
.s-sec{padding:8px 16px 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:var(--muted);}
.s-item{display:flex;align-items:center;gap:11px;padding:10px 18px;cursor:pointer;font-size:13px;color:var(--muted);border:none;background:none;width:100%;text-align:left;font-family:'DM Sans',sans-serif;border-left:2px solid transparent;transition:all .2s;}
.s-item:hover{background:rgba(201,168,76,.06);color:var(--text);}
.s-item.active{background:rgba(201,168,76,.1);color:var(--gold);border-left-color:var(--gold);}
.s-icon{font-size:15px;width:18px;text-align:center;}
.s-foot{padding:14px;border-top:1px solid var(--bsoft);}
.theme-btn{width:100%;background:none;border:1px solid var(--brd);color:var(--muted);padding:8px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:1px;transition:all .3s;display:flex;align-items:center;justify-content:center;gap:7px;}
.theme-btn:hover{border-color:var(--gold);color:var(--gold);}
.main{margin-left:250px;min-height:100vh;}
.topbar{background:var(--bg2);border-bottom:1px solid var(--brd);padding:14px 28px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:50;transition:background var(--tr);}
.tb-title{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:var(--text);}
.tb-title span{color:var(--gold);}
.tb-right{display:flex;align-items:center;gap:10px;}
.fb-badge{font-size:11px;padding:5px 12px;border:1px solid var(--bsoft);color:var(--muted);display:flex;align-items:center;gap:5px;}
.fb-badge.ok{border-color:rgba(39,174,96,.4);color:#27ae60;}
.fb-badge.err{border-color:rgba(231,76,60,.4);color:var(--danger);}
.out-btn{background:none;border:1px solid var(--brd);color:var(--muted);padding:8px 14px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:1px;transition:all .3s;}
.out-btn:hover{border-color:var(--danger);color:var(--danger);}
.mob-btn{display:none;background:none;border:1px solid var(--brd);color:var(--muted);padding:8px 12px;cursor:pointer;font-size:17px;}
.overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:90;}
.content{padding:28px;}
.panel{display:none;}
.panel.active{display:block;}
.card{background:var(--bg3);border:1px solid var(--bsoft);padding:24px;margin-bottom:20px;position:relative;transition:background var(--tr);}
.card::before{content:'';position:absolute;top:0;left:0;width:36px;height:2px;background:var(--gold);}
.c-title{font-family:'Playfair Display',serif;font-size:17px;font-weight:700;color:var(--text);margin-bottom:4px;}
.c-sub{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:18px;}
.fg{margin-bottom:14px;}
.fg label{display:block;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:6px;}
.fi{width:100%;background:var(--inp);border:1px solid var(--bsoft);color:var(--text);padding:11px 14px;font-family:'DM Sans',sans-serif;font-size:13px;outline:none;transition:border-color .3s;resize:vertical;}
.fi:focus{border-color:var(--gold);}
.fi::placeholder{color:var(--muted);}
.fr2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.btn{padding:9px 20px;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;transition:all .3s;border:none;display:inline-flex;align-items:center;gap:7px;}
.btn-g{background:var(--gold);color:#0a0f1e;}
.btn-g:hover{background:var(--gold-light);}
.btn-g:disabled{opacity:.5;cursor:not-allowed;}
.btn-o{background:none;border:1px solid var(--brd);color:var(--muted);}
.btn-o:hover{border-color:var(--gold);color:var(--gold);}
.btn-d{background:var(--dangerBg);border:1px solid rgba(231,76,60,.3);color:var(--danger);}
.btn-d:hover{background:var(--danger);color:#fff;}
.btn-sm{padding:6px 12px;font-size:10px;}
.sg{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px;}
.sc2{background:var(--bg3);border:1px solid var(--bsoft);padding:20px;text-align:center;}
.sn2{font-family:'Playfair Display',serif;font-size:38px;font-weight:900;color:var(--gold);line-height:1;}
.sl2{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-top:6px;}
.div{display:flex;align-items:center;gap:14px;margin:20px 0 16px;}
.div-l{flex:1;height:1px;background:var(--bsoft);}
.div-t{font-size:10px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);white-space:nowrap;}
.nadd{background:var(--bg2);border:1px solid rgba(201,168,76,.2);padding:20px;margin-bottom:20px;position:relative;}
.nadd::before{content:'';position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,transparent,var(--gold),transparent);}
.nlist{display:grid;gap:10px;}
.nitem{background:var(--bg2);border:1px solid var(--bsoft);padding:16px 18px;display:grid;grid-template-columns:1fr auto;gap:14px;align-items:start;}
.ni-cat{font-size:9px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);}
.ni-title{font-family:'Playfair Display',serif;font-size:14px;color:var(--text);margin:3px 0;}
.ni-txt{font-size:12px;color:var(--muted);line-height:1.5;}
.ni-date{font-size:10px;color:var(--muted);margin-top:5px;}
.n-acts{display:flex;gap:7px;flex-shrink:0;}
.empty{text-align:center;padding:50px 20px;color:var(--muted);}
.empty-i{font-size:44px;display:block;margin-bottom:10px;}
.gi-row{display:flex;align-items:center;gap:10px;background:var(--bg2);padding:9px 14px;border:1px solid var(--bsoft);margin-bottom:7px;}
.gi-row input{flex:1;background:transparent;border:none;color:var(--text);font-family:'DM Sans',sans-serif;font-size:13px;outline:none;}
.titem{background:var(--bg2);border:1px solid var(--bsoft);padding:14px;margin-bottom:10px;}
.titem-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;}
.titem-name{font-size:13px;font-weight:600;color:var(--text);}
.save-indicator{font-size:11px;color:#27ae60;display:none;margin-left:8px;}
.save-indicator.show{display:inline;}
.toast{position:fixed;bottom:28px;right:28px;padding:13px 22px;font-weight:600;font-size:13px;z-index:9999;transform:translateY(80px);opacity:0;transition:all .35s;max-width:320px;}
.toast.show{transform:translateY(0);opacity:1;}
.toast.ok{background:var(--gold);color:#0a0f1e;}
.toast.err{background:var(--danger);color:#fff;}
.info-box{background:rgba(201,168,76,.06);border:1px solid rgba(201,168,76,.2);padding:14px 16px;font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:16px;}
.info-box strong{color:var(--gold);}
@media(max-width:900px){.sg{grid-template-columns:repeat(2,1fr);}}
@media(max-width:768px){.sidebar{transform:translateX(-100%);}.sidebar.open{transform:translateX(0);}.overlay.open{display:block;}.main{margin-left:0;}.mob-btn{display:block;}.topbar{padding:12px 16px;}.content{padding:16px;}.fr2{grid-template-columns:1fr;}.sg{grid-template-columns:repeat(2,1fr);}}
</style>
</head>
<body>

<div class="overlay" id="overlay" onclick="closeSB()"></div>

<aside class="sidebar" id="sidebar">
  <div class="s-logo">
    <div class="s-logo-txt">AMERICAN <span>Academy</span></div>
    <span class="s-badge">✦ Admin Panel</span>
  </div>
  <nav class="s-nav">
    <div class="s-sec">Asosiy</div>
    <button class="s-item active" onclick="go('dashboard',this)"><span class="s-icon">📊</span>Dashboard</button>
    <div class="s-sec">Kontent (Firebase)</div>
    <button class="s-item" onclick="go('hero',this)"><span class="s-icon">🏠</span>Hero</button>
    <button class="s-item" onclick="go('stats',this)"><span class="s-icon">📈</span>Statistika</button>
    <button class="s-item" onclick="go('about',this)"><span class="s-icon">ℹ️</span>Biz Haqimizda</button>
    <button class="s-item" onclick="go('courses',this)"><span class="s-icon">📚</span>Kurslar</button>
    <button class="s-item" onclick="go('teachers',this)"><span class="s-icon">👩‍🏫</span>O'qituvchilar</button>
    <button class="s-item" onclick="go('gallery',this)"><span class="s-icon">🖼️</span>Galereya</button>
    <button class="s-item" onclick="go('news',this)"><span class="s-icon">🔥</span>Yangiliklar</button>
    <button class="s-item" onclick="go('contact',this)"><span class="s-icon">📞</span>Aloqa</button>
    <button class="s-item" onclick="go('footer',this)"><span class="s-icon">🔽</span>Footer</button>
  </nav>
  <div class="s-foot">
    <button class="theme-btn" id="themeBtn" onclick="toggleTheme()">🌙 Dark Mode</button>
  </div>
</aside>

<div class="main">
  <div class="topbar">
    <div style="display:flex;align-items:center;gap:10px;">
      <button class="mob-btn" onclick="openSB()">☰</button>
      <div class="tb-title">Admin <span>Panel</span></div>
    </div>
    <div class="tb-right">
      <div class="fb-badge" id="fbBadge">⏳ Ulanmoqda...</div>
      <button class="out-btn" onclick="logout()">← Chiqish</button>
    </div>
  </div>

  <div class="content">

    <!-- DASHBOARD -->
    <div class="panel active" id="panel-dashboard">
      <div class="sg">
        <div class="sc2"><div class="sn2" id="dn">—</div><div class="sl2">Yangiliklar</div></div>
        <div class="sc2"><div class="sn2" id="ds">—</div><div class="sl2">Sozlamalar</div></div>
        <div class="sc2"><div class="sn2">12</div><div class="sl2">O'qituvchilar</div></div>
        <div class="sc2"><div class="sn2">95%</div><div class="sl2">IELTS</div></div>
      </div>
      <div class="card">
        <div class="c-sub">✦ Xush Kelibsiz</div>
        <div class="c-title">American Academy — Firebase Admin Panel</div>
        <div class="info-box" style="margin-top:12px;">
          🔥 <strong>Barcha bo'limlar Firebase Firestore</strong> ga ulangan.<br>
          Admin istalgan bo'limni o'zgartirsa → <strong>barcha foydalanuvchilar dunyoning istalgan joyidan real vaqtda ko'radi.</strong><br><br>
          📁 <strong>Firestore kolleksiyalari:</strong><br>
          • <code style="color:var(--gold)">settings/main</code> — Hero, Stats, About, Courses, Teachers, Gallery, Contact, Footer<br>
          • <code style="color:var(--gold)">news</code> — Yangiliklar (har biri alohida document)
        </div>
        <button class="btn btn-o btn-sm" onclick="window.open('index.html','_blank')">🌐 Websiteni Ko'rish</button>
      </div>
    </div>

    <!-- HERO -->
    <div class="panel" id="panel-hero">
      <div class="card">
        <div class="c-sub">✦ Hero Bo'limi</div>
        <div class="c-title">Bosh Sahifa Matni</div>
        <div class="info-box">Saqlash tugmasini bosing → <strong>barcha foydalanuvchilarda darhol o'zgaradi</strong></div>
        <div class="fg"><label>Eyebrow matni (UZ)</label><input class="fi" id="h_ey_uz" placeholder="✦ Xorazm, O'zbekiston ✦"></div>
        <div class="fg"><label>Eyebrow matni (EN)</label><input class="fi" id="h_ey_en" placeholder="✦ Khorezm, Uzbekistan ✦"></div>
        <div class="fg"><label>Eyebrow matni (RU)</label><input class="fi" id="h_ey_ru" placeholder="✦ Хорезм, Узбекистан ✦"></div>
        <div class="div"><div class="div-l"></div><span class="div-t">Subtitle</span><div class="div-l"></div></div>
        <div class="fg"><label>Subtitle (UZ)</label><textarea class="fi" id="h_sub_uz" placeholder="Ingliz tili ta'limida mukammallik..."></textarea></div>
        <div class="fg"><label>Subtitle (EN)</label><textarea class="fi" id="h_sub_en" placeholder="Excellence in English Education..."></textarea></div>
        <div class="fg"><label>Subtitle (RU)</label><textarea class="fi" id="h_sub_ru" placeholder="Совершенство в обучении..."></textarea></div>
        <div class="div"><div class="div-l"></div><span class="div-t">Tugmalar</span><div class="div-l"></div></div>
        <div class="fr2">
          <div class="fg"><label>1-tugma (UZ)</label><input class="fi" id="h_b1_uz" placeholder="Kurslarni Ko'rish"></div>
          <div class="fg"><label>2-tugma (UZ)</label><input class="fi" id="h_b2_uz" placeholder="Ro'yxatdan O'tish"></div>
        </div>
        <div class="fr2">
          <div class="fg"><label>1-tugma (EN)</label><input class="fi" id="h_b1_en" placeholder="Explore Courses"></div>
          <div class="fg"><label>2-tugma (EN)</label><input class="fi" id="h_b2_en" placeholder="Register Now"></div>
        </div>
        <div class="fg"><label>Fon rasm URL (ixtiyoriy)</label><input class="fi" id="h_bgImg" placeholder="img/Gallery2.jpg yoki https://..."></div>
        <button class="btn btn-g" id="saveHeroBtn" onclick="saveSection('hero')">🔥 Firebase ga Saqlash</button>
      </div>
    </div>

    <!-- STATS -->
    <div class="panel" id="panel-stats">
      <div class="card">
        <div class="c-sub">✦ Statistika</div>
        <div class="c-title">Raqamli Ko'rsatkichlar</div>
        <div class="info-box">Bu raqamlar website da animatsiya bilan ko'rsatiladi.</div>
        <div class="fr2">
          <div class="fg"><label>Bitiruvchilar soni</label><input class="fi" id="st_grad" type="number" placeholder="500"></div>
          <div class="fg"><label>Yillik tajriba</label><input class="fi" id="st_exp" type="number" placeholder="8"></div>
        </div>
        <div class="fr2">
          <div class="fg"><label>O'qituvchilar soni</label><input class="fi" id="st_teach" type="number" placeholder="12"></div>
          <div class="fg"><label>IELTS muvaffaqiyati (%)</label><input class="fi" id="st_ielts" type="number" placeholder="95"></div>
        </div>
        <button class="btn btn-g" onclick="saveSection('stats')">🔥 Firebase ga Saqlash</button>
      </div>
    </div>

    <!-- ABOUT -->
    <div class="panel" id="panel-about">
      <div class="card">
        <div class="c-sub">✦ Biz Haqimizda</div>
        <div class="c-title">About Bo'limi</div>
        <div class="fg"><label>1-paragraf (UZ)</label><textarea class="fi" id="ab_p1_uz" placeholder="American Academy haqida..."></textarea></div>
        <div class="fg"><label>1-paragraf (EN)</label><textarea class="fi" id="ab_p1_en" placeholder="American Academy is..."></textarea></div>
        <div class="fg"><label>2-paragraf (UZ)</label><textarea class="fi" id="ab_p2_uz" placeholder="Tajribali o'qituvchilar..."></textarea></div>
        <div class="fr2">
          <div class="fg"><label>Rasm URL</label><input class="fi" id="ab_img" placeholder="img/logo.jpg"></div>
          <div class="fg"><label>Badge raqami (masalan: 8+)</label><input class="fi" id="ab_badge" placeholder="8"></div>
        </div>
        <div class="div"><div class="div-l"></div><span class="div-t">Xususiyatlar ro'yxati (Features)</span><div class="div-l"></div></div>
        <div id="featuresEdit"></div>
        <button class="btn btn-o btn-sm" onclick="addFeature()" style="margin-bottom:14px;">+ Xususiyat Qo'shish</button>
        <button class="btn btn-g" onclick="saveSection('about')">🔥 Firebase ga Saqlash</button>
      </div>
    </div>

    <!-- COURSES -->
    <div class="panel" id="panel-courses">
      <div class="card">
        <div class="c-sub">✦ Kurslar</div>
        <div class="c-title">Kurslar Bo'limi</div>
        <div class="fr2">
          <div class="fg"><label>Sarlavha (UZ)</label><input class="fi" id="co_tit_uz" placeholder="Kurslarimiz"></div>
          <div class="fg"><label>Sarlavha (EN)</label><input class="fi" id="co_tit_en" placeholder="Our Courses"></div>
        </div>
        <div class="div"><div class="div-l"></div><span class="div-t">Kurslar Ro'yxati</span><div class="div-l"></div></div>
        <div id="coursesEdit"></div>
        <button class="btn btn-o btn-sm" onclick="addCourse()" style="margin-bottom:14px;">+ Kurs Qo'shish</button>
        <button class="btn btn-g" onclick="saveSection('courses')">🔥 Firebase ga Saqlash</button>
      </div>
    </div>

    <!-- TEACHERS -->
    <div class="panel" id="panel-teachers">
      <div class="card">
        <div class="c-sub">✦ O'qituvchilar</div>
        <div class="c-title">Bosh O'qituvchi</div>
        <div class="fr2">
          <div class="fg"><label>Ism Familya</label><input class="fi" id="hd_name" placeholder="Og'abek Ruzmetov"></div>
          <div class="fg"><label>Lavozim</label><input class="fi" id="hd_role" placeholder="✦ Bosh O'qituvchi va Asoschisi"></div>
        </div>
        <div class="fg"><label>Tavsif (UZ)</label><textarea class="fi" id="hd_desc" placeholder="Cambridge CELTA..."></textarea></div>
        <div class="fr2">
          <div class="fg"><label>Rasm URL</label><input class="fi" id="hd_img" placeholder="img/ogabek_ruzmetov.jpg"></div>
          <div class="fg"><label>Sertifikat URL</label><input class="fi" id="hd_cert" placeholder="img/certs/ogabek-cert.jpg"></div>
        </div>
        <div class="div"><div class="div-l"></div><span class="div-t">Boshqa O'qituvchilar</span><div class="div-l"></div></div>
        <div id="teachersEdit"></div>
        <button class="btn btn-o btn-sm" onclick="addTeacher()" style="margin-bottom:14px;">+ O'qituvchi Qo'shish</button>
        <button class="btn btn-g" onclick="saveSection('teachers')">🔥 Firebase ga Saqlash</button>
      </div>
    </div>

    <!-- GALLERY -->
    <div class="panel" id="panel-gallery">
      <div class="card">
        <div class="c-sub">✦ Galereya</div>
        <div class="c-title">Galereya Rasmlari</div>
        <div class="info-box">Rasm URL manzillarini kiriting. <strong>img/...</strong> (server papkasidan) yoki <strong>https://...</strong> (internet link)</div>
        <div id="galleryEdit"></div>
        <button class="btn btn-o btn-sm" onclick="addGI()" style="margin:10px 0;">+ Rasm Qo'shish</button>
        <button class="btn btn-g" onclick="saveSection('gallery')">🔥 Firebase ga Saqlash</button>
      </div>
    </div>

    <!-- NEWS -->
    <div class="panel" id="panel-news">
      <div class="card">
        <div class="c-sub">🔥 Firebase Real-time Yangiliklar</div>
        <div class="c-title">Yangiliklar Boshqaruvi</div>
        <div class="nadd">
          <div class="fr2">
            <div class="fg"><label>Sarlavha *</label><input class="fi" id="n_title" placeholder="Yangilik sarlavhasi..."></div>
            <div class="fg"><label>Kategoriya</label><input class="fi" id="n_cat" value="✦ Yangilik"></div>
          </div>
          <div class="fg"><label>Matn *</label><textarea class="fi" id="n_text" placeholder="Yangilik matni..." style="min-height:90px;"></textarea></div>
          <div class="fg"><label>Rasm URL (ixtiyoriy)</label><input class="fi" id="n_img" placeholder="https://... yoki img/..."></div>
          <div class="fr2">
            <div class="fg"><label>Sana</label><input class="fi" id="n_date" type="date"></div>
            <div class="fg" style="display:flex;align-items:flex-end;">
              <button class="btn btn-g" id="addNewsBtn" onclick="addNews()" style="width:100%;">+ Yangilik Qo'shish</button>
            </div>
          </div>
        </div>
        <div class="div"><div class="div-l"></div><span class="div-t">Mavjud Yangiliklar</span><div class="div-l"></div></div>
        <div class="nlist" id="newsList"><div class="empty"><span class="empty-i">⏳</span>Firebase dan yuklanmoqda...</div></div>
      </div>
    </div>

    <!-- CONTACT -->
    <div class="panel" id="panel-contact">
      <div class="card">
        <div class="c-sub">✦ Aloqa Ma'lumotlari</div>
        <div class="c-title">Register Bo'limi — Aloqa</div>
        <div class="fg"><label>Manzil (UZ)</label><input class="fi" id="ct_addr_uz" placeholder="O'zbekiston, Xorazm, Xonqa"></div>
        <div class="fg"><label>Manzil (EN)</label><input class="fi" id="ct_addr_en" placeholder="Uzbekistan, Khorezm, Khonqa"></div>
        <div class="fr2">
          <div class="fg"><label>Telefon raqami</label><input class="fi" id="ct_phone" placeholder="+998 97 740 33 19"></div>
          <div class="fg"><label>Email manzili</label><input class="fi" id="ct_email" placeholder="info@americanacademy.uz"></div>
        </div>
        <div class="fg"><label>Ish vaqti (UZ)</label><input class="fi" id="ct_hrs" placeholder="Dush–Shan: 8:00 – 20:00"></div>
        <div class="div"><div class="div-l"></div><span class="div-t">Ijtimoiy tarmoqlar</span><div class="div-l"></div></div>
        <div class="fg"><label>Instagram URL</label><input class="fi" id="ct_ig" placeholder="https://instagram.com/..."></div>
        <div class="fg"><label>Telegram URL</label><input class="fi" id="ct_tg" placeholder="https://t.me/..."></div>
        <div class="fg"><label>YouTube URL</label><input class="fi" id="ct_yt" placeholder="https://youtube.com/..."></div>
        <button class="btn btn-g" onclick="saveSection('contact')">🔥 Firebase ga Saqlash</button>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="panel" id="panel-footer">
      <div class="card">
        <div class="c-sub">✦ Footer Bo'limi</div>
        <div class="c-title">Pastki Qism Matni</div>
        <div class="fg"><label>Tavsif (UZ)</label><textarea class="fi" id="ft_desc_uz" placeholder="2016 yildan beri..."></textarea></div>
        <div class="fg"><label>Tavsif (EN)</label><textarea class="fi" id="ft_desc_en" placeholder="Excellence since 2016..."></textarea></div>
        <div class="fg"><label>Copyright matni</label><input class="fi" id="ft_copy" placeholder="© 2026 Javlonboyev Javohir..."></div>
        <button class="btn btn-g" onclick="saveSection('footer')">🔥 Firebase ga Saqlash</button>
      </div>
    </div>

  </div>
</div>

<div class="toast" id="toast"></div>

<!-- ═══════════════════════════════════════════════
  🔥 FIREBASE CONFIG — SHU 6 QATORNI O'ZGARTIRING
  console.firebase.google.com →
  Project Settings → Your apps → Web → Config
════════════════════════════════════════════════ -->
<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, collection, addDoc, deleteDoc, doc, setDoc,
  onSnapshot, query, orderBy, serverTimestamp, getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ▼▼▼ SHU 6 QATORNI O'ZGARTIRING ▼▼▼
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
// ▲▲▲ SHU 6 QATORNI O'ZGARTIRING ▲▲▲

let db;
try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  window._db = db;
  setFbStatus(true);

  // ── YANGILIKLAR listener ──────────────────────
  const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
  onSnapshot(q, (snap) => {
    const news = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    window._newsData = news;
    renderNewsList(news);
    const el = document.getElementById('dn');
    if (el) el.textContent = news.length;
  }, (err) => { console.error(err); setFbStatus(false); });

  // ── SETTINGS listener — mavjud ma'lumotlarni formaga yuklaydi ──
  onSnapshot(doc(db, "settings", "main"), (snap) => {
    if (!snap.exists()) {
      document.getElementById('ds').textContent = '0';
      return;
    }
    const d = snap.data();
    document.getElementById('ds').textContent = '✓';

    // HERO
    if (d.hero) {
      sv('h_ey_uz', d.hero.ey_uz); sv('h_ey_en', d.hero.ey_en); sv('h_ey_ru', d.hero.ey_ru);
      sv('h_sub_uz', d.hero.sub_uz); sv('h_sub_en', d.hero.sub_en); sv('h_sub_ru', d.hero.sub_ru);
      sv('h_b1_uz', d.hero.b1_uz); sv('h_b2_uz', d.hero.b2_uz);
      sv('h_b1_en', d.hero.b1_en); sv('h_b2_en', d.hero.b2_en);
      sv('h_bgImg', d.hero.bgImg);
    }
    // STATS
    if (d.stats) {
      sv('st_grad', d.stats.grad); sv('st_exp', d.stats.exp);
      sv('st_teach', d.stats.teach); sv('st_ielts', d.stats.ielts);
    }
    // ABOUT
    if (d.about) {
      sv('ab_p1_uz', d.about.p1_uz); sv('ab_p1_en', d.about.p1_en);
      sv('ab_p2_uz', d.about.p2_uz); sv('ab_img', d.about.img);
      sv('ab_badge', d.about.badge);
      if (d.about.features) { window._features = d.about.features; renderFeatures(); }
    }
    // COURSES
    if (d.courses) {
      sv('co_tit_uz', d.courses.tit_uz); sv('co_tit_en', d.courses.tit_en);
      if (d.courses.list) { window._courses = d.courses.list; renderCourses(); }
    }
    // TEACHERS
    if (d.teachers) {
      sv('hd_name', d.teachers.name); sv('hd_role', d.teachers.role);
      sv('hd_desc', d.teachers.desc); sv('hd_img', d.teachers.img);
      sv('hd_cert', d.teachers.cert);
      if (d.teachers.list) { window._teachers = d.teachers.list; renderTeachers(); }
    }
    // GALLERY
    if (d.gallery && d.gallery.items) { window._gallery = d.gallery.items; renderGallery(); }
    // CONTACT
    if (d.contact) {
      sv('ct_addr_uz', d.contact.addr_uz); sv('ct_addr_en', d.contact.addr_en);
      sv('ct_phone', d.contact.phone); sv('ct_email', d.contact.email);
      sv('ct_hrs', d.contact.hrs); sv('ct_ig', d.contact.ig);
      sv('ct_tg', d.contact.tg); sv('ct_yt', d.contact.yt);
    }
    // FOOTER
    if (d.footer) {
      sv('ft_desc_uz', d.footer.desc_uz); sv('ft_desc_en', d.footer.desc_en);
      sv('ft_copy', d.footer.copy);
    }
  });

} catch(e) {
  console.error("Firebase ulanmadi:", e);
  setFbStatus(false);
}

function setFbStatus(ok) {
  const el = document.getElementById('fbBadge');
  if (!el) return;
  el.textContent = ok ? '🔥 Firebase Ulangan' : '❌ Firebase Xato';
  el.className = 'fb-badge ' + (ok ? 'ok' : 'err');
}

// ── BO'LIM SAQLASH (settings/main ga) ─────────────────
window.saveSection = async function(section) {
  if (!db) { showToast('❌ Firebase ulanmagan!', 'err'); return; }

  let data = {};

  if (section === 'hero') {
    data.hero = {
      ey_uz: v('h_ey_uz'), ey_en: v('h_ey_en'), ey_ru: v('h_ey_ru'),
      sub_uz: v('h_sub_uz'), sub_en: v('h_sub_en'), sub_ru: v('h_sub_ru'),
      b1_uz: v('h_b1_uz'), b2_uz: v('h_b2_uz'),
      b1_en: v('h_b1_en'), b2_en: v('h_b2_en'),
      bgImg: v('h_bgImg')
    };
  } else if (section === 'stats') {
    data.stats = {
      grad: Number(v('st_grad')), exp: Number(v('st_exp')),
      teach: Number(v('st_teach')), ielts: Number(v('st_ielts'))
    };
  } else if (section === 'about') {
    data.about = {
      p1_uz: v('ab_p1_uz'), p1_en: v('ab_p1_en'), p2_uz: v('ab_p2_uz'),
      img: v('ab_img'), badge: v('ab_badge'),
      features: window._features || []
    };
  } else if (section === 'courses') {
    data.courses = {
      tit_uz: v('co_tit_uz'), tit_en: v('co_tit_en'),
      list: window._courses || []
    };
  } else if (section === 'teachers') {
    data.teachers = {
      name: v('hd_name'), role: v('hd_role'), desc: v('hd_desc'),
      img: v('hd_img'), cert: v('hd_cert'),
      list: window._teachers || []
    };
  } else if (section === 'gallery') {
    data.gallery = { items: window._gallery || [] };
  } else if (section === 'contact') {
    data.contact = {
      addr_uz: v('ct_addr_uz'), addr_en: v('ct_addr_en'),
      phone: v('ct_phone'), email: v('ct_email'),
      hrs: v('ct_hrs'), ig: v('ct_ig'), tg: v('ct_tg'), yt: v('ct_yt')
    };
  } else if (section === 'footer') {
    data.footer = {
      desc_uz: v('ft_desc_uz'), desc_en: v('ft_desc_en'), copy: v('ft_copy')
    };
  }

  try {
    // merge: true — boshqa bo'limlarni o'chirmaydi
    await setDoc(doc(db, "settings", "main"), data, { merge: true });
    showToast('✅ ' + section + ' saqlandi! Barcha foydalanuvchilar ko\'rmoqda.', 'ok');
  } catch(e) {
    showToast('❌ Xatolik: ' + e.message, 'err');
  }
};

// ── YANGILIKLAR ───────────────────────────────────────
window.addNews = async function() {
  const title = document.getElementById('n_title').value.trim();
  const text  = document.getElementById('n_text').value.trim();
  const cat   = document.getElementById('n_cat').value.trim() || '✦ Yangilik';
  const img   = document.getElementById('n_img').value.trim();
  const dateV = document.getElementById('n_date').value;

  if (!title || !text) { showToast('❌ Sarlavha va matn kiritish shart!', 'err'); return; }
  if (!db) { showToast('❌ Firebase ulanmagan!', 'err'); return; }

  const btn = document.getElementById('addNewsBtn');
  btn.textContent = '⏳ Qo\'shilmoqda...';
  btn.disabled = true;

  try {
    await addDoc(collection(db, "news"), {
      title, text, cat, img,
      date: dateV ? fmtDate(dateV) : new Date().toLocaleDateString('uz-UZ'),
      createdAt: serverTimestamp()
    });
    document.getElementById('n_title').value = '';
    document.getElementById('n_text').value  = '';
    document.getElementById('n_img').value   = '';
    document.getElementById('n_cat').value   = '✦ Yangilik';
    document.getElementById('n_date').value  = new Date().toISOString().split('T')[0];
    showToast('✅ Yangilik qo\'shildi! Barcha foydalanuvchilar ko\'rmoqda.');
  } catch(e) {
    showToast('❌ Xatolik: ' + e.message, 'err');
  }
  btn.textContent = '+ Yangilik Qo\'shish';
  btn.disabled = false;
};

window.deleteNews = async function(id) {
  if (!confirm('Yangilikni o\'chirishni tasdiqlaysizmi?')) return;
  try {
    await deleteDoc(doc(db, "news", id));
    showToast('🗑️ Yangilik o\'chirildi');
  } catch(e) {
    showToast('❌ ' + e.message, 'err');
  }
};

window.editNews = function(id) {
  const n = (window._newsData || []).find(x => x.id === id);
  if (!n) return;
  document.getElementById('n_title').value = n.title;
  document.getElementById('n_text').value  = n.text;
  document.getElementById('n_cat').value   = n.cat || '✦ Yangilik';
  document.getElementById('n_img').value   = n.img || '';
  deleteDoc(doc(db, "news", id));
  document.getElementById('n_title').scrollIntoView({ behavior: 'smooth' });
  showToast('✏️ Tahrirlash uchun ochildi. O\'zgartirib "+" tugmasini bosing.');
};

function renderNewsList(news) {
  const list = document.getElementById('newsList');
  if (!list) return;
  if (!news.length) {
    list.innerHTML = '<div class="empty"><span class="empty-i">📰</span>Hali yangilik yo\'q. Yuqorida qo\'shing.</div>';
    return;
  }
  list.innerHTML = news.map(n => `
    <div class="nitem">
      <div>
        <div class="ni-cat">${n.cat || '✦ Yangilik'}</div>
        <div class="ni-title">${n.title}</div>
        <div class="ni-txt">${n.text.substring(0, 120)}${n.text.length > 120 ? '...' : ''}</div>
        <div class="ni-date">📅 ${n.date || ''}</div>
      </div>
      <div class="n-acts">
        <button class="btn btn-o btn-sm" onclick="editNews('${n.id}')">✏️</button>
        <button class="btn btn-d btn-sm" onclick="deleteNews('${n.id}')">🗑️</button>
      </div>
    </div>`).join('');
}

function fmtDate(d) {
  const p = d.split('-');
  return p.length === 3 ? p[2] + '.' + p[1] + '.' + p[0] : d;
}
</script>

<script>
// ═══ UI + Dynamic lists ═══

let theme = localStorage.getItem('aa_theme') || 'dark';
document.documentElement.setAttribute('data-theme', theme);

function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('aa_theme', theme);
  document.getElementById('themeBtn').textContent = theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';
}
document.getElementById('themeBtn').textContent = theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';

function openSB()  { document.getElementById('sidebar').classList.add('open');    document.getElementById('overlay').classList.add('open'); }
function closeSB() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('open'); }

function go(id, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.s-item').forEach(n => n.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  if (btn) btn.classList.add('active');
  closeSB();
}

function showToast(msg, type = 'ok') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast ' + type;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

function logout() {
  if (confirm('Admin paneldan chiqmoqchimisiz?')) {
    window.close();
    window.location.href = 'index.html';
  }
}

function v(id)       { const el = document.getElementById(id); return el ? el.value : ''; }
function sv(id, val) { if (val === undefined || val === null) return; const el = document.getElementById(id); if (el && val !== '') el.value = val; }

// ─── FEATURES ───────────────────────────────────────
window._features = [
  "Professional va sertifikatlangan o'qituvchilar",
  "Kichik guruhlar — individual e'tibor",
  "CEFR standartlariga mos o'quv dasturi",
  "Moslashuvchan dars jadvali",
  "IELTS 7.0+ band kafolati"
];
function renderFeatures() {
  document.getElementById('featuresEdit').innerHTML = window._features.map((f, i) => `
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
      <input class="fi" style="flex:1;" value="${f}" onchange="window._features[${i}]=this.value">
      <button class="btn btn-d btn-sm" onclick="window._features.splice(${i},1);renderFeatures()">✕</button>
    </div>`).join('');
}
window.addFeature = function() { window._features.push("Yangi xususiyat"); renderFeatures(); };

// ─── COURSES ─────────────────────────────────────────
window._courses = [
  {num:'01',level:'A1',icon:'🌱',title:"Boshlang'ich",desc:"Noldan boshlovchilar uchun kurs.",dur:'3–4 oy',next:'Elementary'},
  {num:'02',level:'A2',icon:'📖',title:'Elementary',desc:"Asosiy grammatika va kundalik gaplashish.",dur:'3–4 oy',next:'Pre-Intermediate'},
  {num:'03',level:'B1–',icon:'⚡',title:'Pre-Intermediate',desc:"Grammatikani chuqurlashtirish.",dur:'3–4 oy',next:'Intermediate'},
  {num:'04',level:'B1',icon:'🎯',title:'Intermediate',desc:"Erkin muloqot va academic writing.",dur:'3–4 oy',next:'Pre-IELTS'},
  {num:'05',level:'B2',icon:'🏆',title:'Pre-IELTS',desc:"IELTS ga tayyorlanish 1-bosqich.",dur:'3–4 oy',next:'IELTS Standard'},
  {num:'06',level:'C1',icon:'✦',title:'IELTS Standard',desc:"Band 7.0–8.0 ga intensiv kurs.",dur:'4 oy intensiv',next:'Band 7.0+'}
];
function renderCourses() {
  document.getElementById('coursesEdit').innerHTML = window._courses.map((c, i) => `
    <div class="titem">
      <div class="titem-head">
        <span class="titem-name">${c.num} — ${c.title}</span>
        <button class="btn btn-d btn-sm" onclick="window._courses.splice(${i},1);renderCourses()">✕ O'chirish</button>
      </div>
      <div class="fr2">
        <div class="fg"><label>Sarlavha</label><input class="fi" value="${c.title}" onchange="window._courses[${i}].title=this.value"></div>
        <div class="fg"><label>Icon emoji</label><input class="fi" value="${c.icon}" onchange="window._courses[${i}].icon=this.value"></div>
      </div>
      <div class="fg"><label>Tavsif</label><textarea class="fi" onchange="window._courses[${i}].desc=this.value">${c.desc}</textarea></div>
      <div class="fr2">
        <div class="fg"><label>Davomiyligi</label><input class="fi" value="${c.dur}" onchange="window._courses[${i}].dur=this.value"></div>
        <div class="fg"><label>Keyingi daraja</label><input class="fi" value="${c.next}" onchange="window._courses[${i}].next=this.value"></div>
      </div>
    </div>`).join('');
}
window.addCourse = function() {
  window._courses.push({num:'0'+(window._courses.length+1),level:'',icon:'⭐',title:'Yangi Kurs',desc:'Tavsif.',dur:'3–4 oy',next:'Keyingi'});
  renderCourses();
};

// ─── TEACHERS ────────────────────────────────────────
window._teachers = [
  {name:'Aziz Toshmatov',level:'Beginner — Elementary',img:'img/teachers/aziz.jpg',cert:'img/certs/aziz-cert.jpg'},
  {name:'Malika Yusupova',level:'Pre-Intermediate',img:'img/teachers/malika.jpg',cert:'img/certs/malika-cert.jpg'},
  {name:'Sardor Nazarov',level:'Intermediate',img:'img/teachers/sardor.jpg',cert:'img/certs/sardor-cert.jpg'},
  {name:'Zulfiya Ahmedova',level:'IELTS Specialist',img:'img/teachers/zulfiya.jpg',cert:'img/certs/zulfiya-cert.jpg'},
  {name:'Jasur Mirzayev',level:'Conversation Club',img:'img/teachers/jasur.jpg',cert:'img/certs/jasur-cert.jpg'},
  {name:'Nodira Xoliqova',level:'Academic Writing',img:'img/teachers/nodira.jpg',cert:'img/certs/nodira-cert.jpg'},
  {name:'Suhrob Mammedov',level:'Beginner',img:'img/teachers/suhrob.jpg',cert:'img/certs/suhrob-cert.jpg'},
  {name:'Davronbek Ozodov',level:'Beginner',img:'img/teachers/davronbek.jpg',cert:'img/certs/davronbek-cert.jpg'},
  {name:'Saida Xushnudova',level:'Pre-IELTS',img:'img/teachers/saida.jpg',cert:'img/certs/saida-cert.jpg'},
  {name:'Munisa Sattorova',level:'IELTS Standart',img:'img/teachers/munisa.jpg',cert:'img/certs/munisa-cert.jpg'},
  {name:'Muhammadali Rasulov',level:'Pre-Intermediate',img:'img/teachers/muhammadali.jpg',cert:'img/certs/muhammadali-cert.jpg'},
  {name:'Asad Qodirov',level:'IELTS Standart',img:'img/teachers/asad.jpg',cert:'img/certs/asad-cert.jpg'}
];
function renderTeachers() {
  document.getElementById('teachersEdit').innerHTML = window._teachers.map((t, i) => `
    <div class="titem">
      <div class="titem-head">
        <span class="titem-name">${t.name}</span>
        <button class="btn btn-d btn-sm" onclick="window._teachers.splice(${i},1);renderTeachers()">✕</button>
      </div>
      <div class="fr2">
        <div class="fg"><label>Ism Familya</label><input class="fi" value="${t.name}" onchange="window._teachers[${i}].name=this.value"></div>
        <div class="fg"><label>Daraja / Yo'nalish</label><input class="fi" value="${t.level}" onchange="window._teachers[${i}].level=this.value"></div>
      </div>
      <div class="fr2">
        <div class="fg"><label>Rasm URL</label><input class="fi" value="${t.img||''}" onchange="window._teachers[${i}].img=this.value"></div>
        <div class="fg"><label>Sertifikat URL</label><input class="fi" value="${t.cert||''}" onchange="window._teachers[${i}].cert=this.value"></div>
      </div>
    </div>`).join('');
}
window.addTeacher = function() {
  window._teachers.push({name:"Yangi O'qituvchi",level:'Daraja',img:'',cert:''});
  renderTeachers();
};

// ─── GALLERY ─────────────────────────────────────────
window._gallery = ['img/Gallery2.jpg','img/Gallery1.jpg','img/Gallery3.jpg','img/Gallery4.jpg','img/Gallery6.jpg'];
function renderGallery() {
  document.getElementById('galleryEdit').innerHTML = window._gallery.map((g, i) => `
    <div class="gi-row">
      <span style="color:var(--gold);font-size:11px;min-width:18px;">${i+1}</span>
      <input value="${g}" onchange="window._gallery[${i}]=this.value" placeholder="img/... yoki https://...">
      <button class="btn btn-d btn-sm" onclick="window._gallery.splice(${i},1);renderGallery()">✕</button>
    </div>`).join('');
}
window.addGI = function() { window._gallery.push(''); renderGallery(); };

// ─── INIT ─────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  renderFeatures();
  renderCourses();
  renderTeachers();
  renderGallery();
  const today = new Date().toISOString().split('T')[0];
  const de = document.getElementById('n_date');
  if (de) de.value = today;
});
</script>
</body>
</html>
