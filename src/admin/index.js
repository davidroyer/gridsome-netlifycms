import Vue from 'vue'
import CMS from "netlify-cms"
import Preview from './preview.js'
import PagePreview from './PagePreview.js'
console.log("TCL: PagePreview", PagePreview)
console.log("TCL: Preview", Preview)
// import React from 'react'
// import Vue from 'vue'
// console.log('TCL: React', React)
import CMS_APP from 'netlify-cms-app'
console.log("TCL: CMS_APP", CMS_APP)
console.log("TCL: CMS", CMS)

// alert('FROM 2 ADMIN/INDEX.JS')

// CMS.registerPreviewTemplate('home', Preview.for(PagePreview))
// CMS.registerPreviewTemplate('about', Preview.for(PagePreview))