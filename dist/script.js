"use strict";
const menuButton=document.querySelector('.menu-toggle'),navigation=document.querySelector('#main-nav');
function closeMenu(){navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';navigation.classList.toggle('is-open',open);menuButton.setAttribute('aria-expanded',String(open));});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
window.addEventListener('resize',()=>{if(window.innerWidth>640)closeMenu();});
const screens={bookshelf:{title:'本棚から選ぶ',file:'real-bookshelf.png'},selection:{title:'教材を決める',file:'real-selection.png'},notes:{title:'ノートに集中する',file:'real-notes.png'},review:{title:'思い出すことに集中する',file:'real-review.png'}};
const tabs=[...document.querySelectorAll('[role="tab"]')],heroImage=document.querySelector('#hero-screen'),heroPanel=document.querySelector('#hero-screen-panel');
function selectTab(tab){tabs.forEach(item=>{const selected=item===tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1;});const screen=screens[tab.dataset.screen];heroImage.src='./assets/'+screen.file+'?v=016';heroImage.alt=screen.title+'の実装画面。サンプル教材を使用。';heroPanel.setAttribute('aria-labelledby',tab.id);}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectTab(tabs[next]);tabs[next].focus();}});});
const screenDialog=document.querySelector('#screen-dialog');let screenOpener=null;
document.querySelectorAll('[data-open-screen]').forEach(button=>button.addEventListener('click',()=>{const screen=screens[button.dataset.openScreen];screenOpener=button;document.querySelector('#screen-dialog-title').textContent=screen.title;const image=document.querySelector('#dialog-screen');image.src='./assets/'+screen.file+'?v=016';image.alt=screen.title+'の実装画面。サンプル教材を使用。';screenDialog.showModal();}));
document.querySelector('#close-screen').addEventListener('click',()=>screenDialog.close());
screenDialog.addEventListener('click',event=>{if(event.target!==screenDialog)return;const rect=screenDialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)screenDialog.close();});
screenDialog.addEventListener('close',()=>screenOpener?.focus({preventScroll:true}));
