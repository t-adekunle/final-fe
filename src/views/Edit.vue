<template>
	<div class="border-b">
	  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold tracking-tight text-gray-900">
		  Edit Page
		</h1>
	  </div>
	</div>
	<QuillEditor v-model="content" ref="quillEditor" :options="globalOptions" id="editor" @selection-change="handleChange" on />
	<!-- <font-awesome-icon icon="fa-regular fa-comment" /> -->
  </template>
  <script>
  import { QuillEditor } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css'
  import Quill from 'quill'
  export default {
	components: {
	  QuillEditor,
	},
	data: () => ({
	  content: '',
	  delta: undefined,
	  selected: {}
	}),
	watch:{ 
		content () {
			this.delta = this.$refs.myQuillEditor.quill.getContents()
			console.log(this.delta, '<<<<this.delta')
		}
	},
	methods: {
	  handleChange(range, oldRange, source) {
	
		if (range) {
		  if (range.range["length"] === 0) {
			console.log('User cursor is on', range.range["index"]);
		  } else {
			const text = this.$refs.quillEditor.getText(range.range["index"], range.range["length"]).trim();
			console.log('User has highlighted', text);
			this.selected.text = text
		  }
		} else {
		  console.log('Cursor not in the editor');
		}
		console.log(this.selected)
	  },
	},
	// mounted() {
	//   this.QuillEditor = new QuillEditor('#editor', this.options);
	//   this.QuillEditor.on('selection-change', this.handleChange);
	// },
  }
  </script>