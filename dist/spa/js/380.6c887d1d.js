"use strict";(self["webpackChunkredo_spa"]=self["webpackChunkredo_spa"]||[]).push([[380],{8380:(e,a,l)=>{l.r(a),l.d(a,{default:()=>ee});var s=l(3673),i=l(2323);const t={class:"row justify-center q-py-xl"},r={class:"col-10"},n={class:"row justify-center q-gutter-y-lg q-gutter-x-md"};function o(e,a,l,o,m,u){const d=(0,s.up)("spa-filter-box"),p=(0,s.up)("spa-animal-card"),c=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(c,{style:{"padding-top":"65px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{searchAnimal:e.searchAnimal},null,8,["searchAnimal"]),(0,s._)("div",t,[(0,s._)("div",r,[(0,s._)("div",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.animalsFiltered,(a=>((0,s.wg)(),(0,s.iD)("div",{key:a.id,style:(0,i.j5)(e.$q.screen.lt.md?"max-width: 200px":"width: 250px")},[(0,s.Wm)(p,{animal:a},null,8,["animal"])],4)))),128))])])])])),_:1})}l(71);var m=l(1959);const u={class:"row justify-center text-dark",style:{"background-color":"rgb(99, 63, 50, 0.15)"}},d={class:"col-10 q-py-md"},p={class:"row justify-between items-end q-gutter-y-sm"},c={class:"col-5"},g=(0,s._)("div",{class:"text-bold"},"Espèces",-1),f={class:"col-6"},h=(0,s._)("div",{class:"text-bold"},"Sexe",-1),b={class:"col-5"},w=(0,s._)("div",{class:"text-bold"},"Age",-1),_={class:"text-subtitle2 text-center"},v={class:"col-6 row justify-end items-end"},y={class:"col-10"},x=(0,s._)("div",{class:"text-bold"},"Commune",-1),k=(0,s.Uk)("Aucun refuge ne se trouve ici");function C(e,a,l,t,r,n){const o=(0,s.up)("q-option-group"),m=(0,s.up)("q-range"),C=(0,s.up)("q-icon"),j=(0,s.up)("q-item-section"),A=(0,s.up)("q-item-label"),q=(0,s.up)("q-item"),D=(0,s.up)("q-select"),W=(0,s.up)("q-checkbox");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",d,[(0,s._)("div",p,[(0,s._)("div",c,[g,(0,s.Wm)(o,{modelValue:e.searchAnimal.species,"onUpdate:modelValue":a[0]||(a[0]=a=>e.searchAnimal.species=a),options:e.options.species,label:"Espece",inline:"",color:"dark"},null,8,["modelValue","options"])]),(0,s._)("div",f,[h,(0,s.Wm)(o,{modelValue:e.searchAnimal.gender,"onUpdate:modelValue":a[1]||(a[1]=a=>e.searchAnimal.gender=a),options:e.options.gender,label:"Sexe",color:"dark",inline:""},null,8,["modelValue","options"])]),(0,s._)("div",b,[w,(0,s.Wm)(m,{modelValue:e.searchAnimal.age,"onUpdate:modelValue":a[2]||(a[2]=a=>e.searchAnimal.age=a),min:0,max:5,color:"dark",markers:""},null,8,["modelValue"]),(0,s._)("div",_," Entre "+(0,i.zw)(e.ages[e.searchAnimal.age.min])+" et "+(0,i.zw)(e.ages[e.searchAnimal.age.max]),1)]),(0,s._)("div",v,[(0,s._)("div",y,[x,(0,s.Wm)(D,{modelValue:e.searchAnimal.commune,"onUpdate:modelValue":a[3]||(a[3]=a=>e.searchAnimal.commune=a),"use-input":"",outlined:"","input-debounce":"0",options:e.villesOptions,onFilter:e.filterFn,clearable:"","options-selected-class":"text-primary"},{option:(0,s.w5)((e=>[(0,s.Wm)(q,(0,s.dG)({clickable:""},e.itemProps),{default:(0,s.w5)((()=>[(0,s.Wm)(j,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{color:"dark",name:"pets"})])),_:1}),(0,s.Wm)(j,{class:"text-dark"},{default:(0,s.w5)((()=>[(0,s.Wm)(A,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.opt),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),"no-option":(0,s.w5)((()=>[(0,s.Wm)(q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(j,{class:"text-grey-9 text-italic"},{default:(0,s.w5)((()=>[k])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter"])]),(0,s.Wm)(W,{class:"col-2",modelValue:e.searchAnimal.sos,"onUpdate:modelValue":a[4]||(a[4]=a=>e.searchAnimal.sos=a),label:"SOS",color:"dark"},null,8,["modelValue"])])])])])}const j=["Brugheas","Cliron","Mirepoix","Cabourg","Vitré","Luynes","Arry","Perpignan","Flayosc","La Roche sur Yon"],A=["2 mois","6 mois","1 an","3 ans","5 ans","10 ans et +"],q={species:[{label:"🐶 Chien",value:"chien"},{label:"🐱 Chat",value:"chat"}],gender:[{label:"Male",value:"male"},{label:"Femelle",value:"female"},{label:"Indiférrent",value:"indiferrent"}]},D=(0,s.aZ)({name:"Filter",props:["searchAnimal"],setup(){const e=(0,m.iH)([]),a=async(a,l,s)=>{a.length<1?s():l((()=>{let l=j.filter((e=>e.toLowerCase().startsWith(a.toLowerCase())));e.value=l}))};return{options:q,ages:A,filterFn:a,villesOptions:e}}});var W=l(8870),R=l(3162),F=l(6289),V=l(3414),Q=l(2035),Z=l(4554),L=l(2350),S=l(5735),z=l(7518),E=l.n(z);D.render=C;const I=D;E()(D,"components",{QOptionGroup:W.Z,QRange:R.Z,QSelect:F.Z,QItem:V.Z,QItemSection:Q.Z,QIcon:Z.Z,QItemLabel:L.Z,QCheckbox:S.Z});const B=["src"],M={class:"row q-gutter-x-xs items-center"},P={class:"col-12"},U={class:"row items-center"},Y={class:"q-pl-xs"};function O(e,a,l,t,r,n){const o=(0,s.up)("q-btn"),m=(0,s.up)("q-item-label"),u=(0,s.up)("q-icon"),d=(0,s.up)("q-item-section"),p=(0,s.up)("q-item"),c=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(c,null,{default:(0,s.w5)((()=>[(0,s._)("img",{src:e.animal.image,style:(0,i.j5)(e.$q.screen.lt.md?"height: 140px":"height: 160px")},null,12,B),(0,s.Wm)(p,{clickable:"",class:"column"},{default:(0,s.w5)((()=>[e.animal.sos?((0,s.wg)(),(0,s.j4)(o,{key:0,color:"primary",label:"SOS",class:"absolute",style:{top:"0",right:"10px",transform:"translateY(-50%)"}})):(0,s.kq)("",!0),(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s._)("div",M,[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.animal.name),1)])),_:1}),(0,s.Wm)(u,{name:e.animal.gender},null,8,["name"])])])),_:1}),(0,s.Wm)(m,{caption:"",class:"row q-pt-sm q-gutter-y-xs"},{default:(0,s.w5)((()=>[(0,s._)("div",P,(0,i.zw)(e.animal.refuge.name),1),(0,s._)("div",U,[(0,s.Wm)(u,{name:"room"}),(0,s._)("div",Y,(0,i.zw)(e.animal.refuge.postalCode)+" "+(0,i.zw)(e.animal.refuge.commune),1)])])),_:1})])),_:1})])),_:1})}const T=(0,s.aZ)({props:["animal"],setup(){}});var G=l(151),H=l(4607);T.render=O;const N=T;E()(T,"components",{QCard:G.Z,QItem:V.Z,QBtn:H.Z,QItemSection:Q.Z,QItemLabel:L.Z,QIcon:Z.Z});const J={"03":{number:3,name:"Refuge de Brugheas",address:"9 bis, La Boucharde",postalCode:"03700",commune:"Brugheas",mail:"brugheas@la-spa.fr",tel:"0470324342"},"08":{number:8,name:"Refuge de Cliron",address:"8 route de Renwez",postalCode:"08090",commune:"Cliron",mail:"cliron@la-spa.fr",tel:"0324549040"},"09":{number:9,name:"Refuge Le Clergue",address:"Route de Villefranche",postalCode:"09500",commune:"Mirepoix",mail:"mirepoix@la-spa.fr",tel:"0561688977"},14:{number:14,name:"Refuge Le Cabourg",address:"Avenue de l'hippodrome",postalCode:"14390",commune:"Cabourg",mail:"cabourg@la-spa.fr",tel:"0231280971"},35:{number:35,name:"Refuge Le Bois Pinson",address:"Route des Eaux",postalCode:"35500",commune:"Vitré",mail:"vitre@la-spa.fr",tel:"029752132"},37:{number:37,name:"Refuge de Luynes",address:"Malitourne",postalCode:"37230",commune:"Luynes",mail:"luynes@la-spa.fr",tel:"0247421047"},57:{number:57,name:"Refuge Gerhard Cramer",address:"Ferme du voisinage - Route Nationale",postalCode:"57680",commune:"Arry",mail:"arry@la-spa.fr",tel:"0387520899"},66:{number:66,name:"Refuge CAP de Perpignan",address:"...",postalCode:"66000",commune:"Perpignan",mail:"perpignan@la-spa.fr",tel:"0468575253"},83:{number:83,name:'Refuge "La Ferme du Relais"',address:"125 route de Lorgues",postalCode:"83780",commune:"Flayosc",mail:"flayosc@la-spa.fr",tel:"0494707066"},85:{number:85,name:"Refuge de La Roche sur Yon",address:"Impasse François Cevert - Route de Nantes",postalCode:"85000",commune:"La Roche sur Yon",mail:"larochesuryon@la-spa.fr",tel:"0251054101"}},$={cats:[{id:1,name:"Sunday",gender:"male",breed:"Européen",birthDate:"01/08/2021",sos:!1,refuge:J[35],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517165.jpg?itok=Tae30y4T"},{id:2,name:"Otis",gender:"male",breed:"Européen",birthDate:"01/10/2017",sos:!1,refuge:J[85],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517168.jpeg?itok=rb54-TvH"},{id:3,name:"Nikita",gender:"female",breed:"Européen",birthDate:"01/01/2016",sos:!1,refuge:J["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517159.jpg?itok=WW9jnlmt"},{id:4,name:"Shoco",gender:"male",breed:"Européen",birthDate:"01/08/2021",sos:!1,refuge:J["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517163.jpg?itok=s8AcgY_d"},{id:5,name:"Sesame",gender:"male",breed:"Européen",birthDate:"01/08/2021",sos:!1,refuge:J["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517160.jpg?itok=EnB9MVGh"},{id:6,name:"Pop Corn",gender:"female",breed:"Croisé / Autre (Maincoon)",birthDate:"01/10/2014",sos:!1,refuge:J["09"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517156.jpg?itok=mcd1jvFR"},{id:7,name:"Aya",gender:"female",breed:"Européen",birthDate:"23/07/2021",sos:!1,refuge:J["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517139.jpg?itok=OlsI9_tL"},{id:8,name:"Tricote",gender:"female",breed:"Européen",birthDate:"01/07/2021",sos:!1,refuge:J["03"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517138.jpg?itok=OnJ4AxCP"},{id:9,name:"Croco",gender:"male",breed:"Européen",birthDate:"01/07/2021",sos:!1,refuge:J["03"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517136.jpg?itok=0qjIJGQS"},{id:10,name:"Houmous",gender:"male",breed:"Européen",birthDate:"01/01/2012",sos:!0,refuge:J["03"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/514420.jpg?itok=4kH9Q0-1"}],dogs:[{id:2,name:"Tania",gender:"female",breed:"Croisé / Autre (Berger)",size:"grand",birthDate:"01/01/2009",sos:!0,refuge:J["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/516736.jpg?itok=vStmuk-0"},{id:3,name:"Derek",gender:"male",breed:"Cane corso",size:"grand",birthDate:"11/09/2011",sos:!0,refuge:J["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/516735.jpg?itok=5VjnjBW4"},{id:4,name:"Filou",gender:"male",breed:"Fox terrier poil dur",size:"petit",birthDate:"03/10/2010",sos:!0,refuge:J[14],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/513841.jpg?itok=ZxR29rQA"},{id:5,name:"Alpy",gender:"male",breed:"Bouvier Bernois",size:"grand",birthDate:"18/03/2011",sos:!0,refuge:J[37],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517166.jpg?itok=btLu5AYI"},{id:6,name:"Mychka",gender:"female",breed:"Berger d'Asie Centrale",size:"grand",birthDate:"01/11/2020",sos:!1,refuge:J[57],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517164.jpg?itok=FwE-P0by"},{id:7,name:"Marley",gender:"male",breed:"Epagneul",size:"grand",birthDate:"25/04/2016",sos:!0,refuge:J["08"],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517157.jpg?itok=_Ta4gE5_"},{id:8,name:"Django",gender:"male",breed:"Berger de Beauce",size:"grand",birthDate:"14/08/2014",sos:!0,refuge:J[57],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/490149.jpg?itok=pvp2IDbG"},{id:9,name:"Mia",gender:"female",breed:"Chow chow",size:"grand",birthDate:"01/01/2016",sos:!1,refuge:J[66],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/517149.jpg?itok=0mnsaQjG"},{id:10,name:"Marvel",gender:"male",breed:"Croisé / Autre (StaffordShire bull terrier)",size:"moyen",birthDate:"01/01/2019",sos:!1,refuge:J[66],image:"https://www.la-spa.fr/sites/default/files/styles/fiche_animal_620x375/public/animals/513459.jpg?itok=FcyCF56l"}]},K=(0,s.aZ)({name:"PageIndex",props:["selected"],components:{SpaFilterBox:I,SpaAnimalCard:N},setup(e){const a=(0,m.iH)({species:e.selected?e.selected:null,commune:null,gender:"indiferrent",age:{min:0,max:5},sos:!1});let l=(0,m.iH)([]);return(0,s.YP)((()=>a),(()=>{a.value.species?"chat"===a.value.species?l.value=[...$.cats]:l.value=[...$.dogs]:l.value=[...$.cats,...$.dogs],"indiferrent"!==a.value.gender&&(l.value=l.value.filter((e=>e.gender===a.value.gender))),a.value.sos&&(l.value=l.value.filter((e=>e.sos))),a.value.commune&&(l.value=l.value.filter((e=>e.refuge.commune===a.value.commune)));const e=[{year:0,month:2},{year:0,month:6},{year:1},{year:3},{year:5},{year:99}];l.value=l.value.filter((l=>{const s=new Date;let i=s.getUTCFullYear()-parseInt(l.birthDate.split("/")[2]),t=s.getUTCMonth()+1-parseInt(l.birthDate.split("/")[1]);t<0&&(i--,t=12-Math.abs(t));let r=!0;return e[a.value.age.min].month&&0===i&&r&&(r=e[a.value.age.min].month<=t),r&&(r=e[a.value.age.min].year<=i),e[a.value.age.min].max&&0===i&&r&&(r=e[a.value.age.min].month>=t),r&&(r=e[a.value.age.max].year>=i),r}))}),{deep:!0,immediate:!0}),{searchAnimal:a,animalsFiltered:l}}});var X=l(4379);K.render=o;const ee=K;E()(K,"components",{QPage:X.Z})}}]);