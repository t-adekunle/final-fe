<template>
	<div class="border-b">
		<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold tracking-tight text-gray-900">
				Edit Page
			</h1>
		</div>
	</div>
	<QuillEditor :options="options" id="editor" @selection-change="handleChange, range" />
	<div id="editor"></div>
</template>
<script>
import { QuillEditor, Quill } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
// import { getContents } from '@vueup/vue-quill'



/*
const quill = new Quill('#editor', {
				debug: 'info',
				modules: {
					toolbar: [
						['bold', 'italic', 'underline', 'strike'], // toggled buttons
						['blockquote', 'code-block'],
						['link', 'image', 'video', 'formula'],

						[{ header: 1 }, { header: 2 }], // custom button values
						[
							{ list: 'ordered' },
							{ list: 'bullet' },
							{ list: 'check' },
						],
						[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
						[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
						[{ direction: 'rtl' }], // text direction

						[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
						[{ header: [1, 2, 3, 4, 5, 6, false] }],

						[{ color: [] }, { background: [] }], // dropdown with defaults from theme
						[{ font: [] }],
						[{ align: [] }],

						['clean'],
					],
				},
				placeholder: 'Start typing...',
				readOnly: false,
				theme: 'snow',

			}
);

*/


// quill.on('selection-change', (range, oldRange, source) => {
//   if (range) {
//     if (range.length == 0) {
//       console.log('User cursor is on', range.index);
//     } else {
//       const text = quill.getText(range.index, range.length);
//       console.log('User has highlighted', text);
//     }
//   } else {
//     console.log('Cursor not in the editor');
//   }
// });

// console.log(quill)

export default {
	components: {
		 QuillEditor,
	},
	data() {
		return {
			
			options: {
				debug: 'info',
				modules: {
					toolbar: [
						['bold', 'italic', 'underline', 'strike'], // toggled buttons
						['blockquote', 'code-block'],
						['link', 'image', 'video', 'formula'],

						[{ header: 1 }, { header: 2 }], // custom button values
						[
							{ list: 'ordered' },
							{ list: 'bullet' },
							{ list: 'check' },
						],
						[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
						[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
						[{ direction: 'rtl' }], // text direction

						[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
						[{ header: [1, 2, 3, 4, 5, 6, false] }],

						[{ color: [] }, { background: [] }], // dropdown with defaults from theme
						[{ font: [] }],
						[{ align: [] }],

						['clean'],
					],
				},
				placeholder: 'Start typing...',
				readOnly: false,
				theme: 'snow',

			},
		}
	},

	methods:{



	//  handleChange : ((range, oldRange, source) => {
	// 	if (range) {
	// 		if(range.length == 0) {
	// 			console.log('User cursor is on', range.index);
	// 		}
	// 		else{
	// 			const text = this.getText(range.index, range.length)
    //   			console.log('User has highlighted', text);
	// 		}
	// 	}
	// 	else{
	// 		console.log('Curser not in the editor')
	// 	}
	// })

// 	if (range) {
//     if (range.length == 0) {
//       console.log('User cursor is on', range.index);
//     } else {
//       const text = this.getText(range.index, range.length);
//       console.log('User has highlighted', text);
//     }
//    else {
//     console.log('Cursor not in the editor');
//   }
// 	})
// },

	handleChange((event){
		
	console.log(event)
	
	const returnText = (range, oldRange, source) => {
		console.log(range)

  if (range) {
    if (range.length == 0) {
      console.log('User cursor is on', range.index);
    } else {
      const text = this.getText(range.index, range.length);
      console.log('User has highlighted', text);
    }
  } else {
    console.log('Cursor not in the editor');
  }
}
returnText()
})
	},
		
	

	computed: {
		toolbar() {
			return // remove formatting button
		},
	},
}
// const editor = new QuillEditor( '#quill-editor')

// const textContent = editor.getSelection()

const range = new Range(0,10)





</script>
