<template>
  <div class="file-upload-container">
    <div
      class="drop-area"
      @dragover.prevent="onDragOver"
      @drop.prevent="onDrop"
    >
      <p>Drag and drop your file here</p>
      <!-- <button @click="triggerFileInput">Choose File</button> -->
      <input
        type="file"
        ref="fileInput"
        class="hidden-file-input"
        @change="handleFileChange"
        accept=".xlsx, .xls, .csv"
      />
    </div>
    <div v-if="file">
      <p>File selected: {{ file.name }}</p>
      <button @click="uploadFile" :disabled="!file">Upload File</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  props: {
    file: {
      type: File,
      default: null
    }
  },
  setup() {
    const file = ref(null);
    const fileInput = ref(null);

    function triggerFileInput() {
      fileInput.value.click();
    }

    function handleFileChange(event) {
      file.value = event.target.files[0];
    }

    function onDragOver(event) {
      event.preventDefault();
    }

    function onDrop(event) {
      const droppedFiles = event.dataTransfer.files;
      if (droppedFiles.length > 0) {
        file.value = droppedFiles[0];
      }
    }

    async function uploadFile() {
      if (!file.value) return;

      const formData = new FormData();
      formData.append('file', file.value);

      try {
        const response = await axios.post('http://localhost:3000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('File uploaded successfully:', response.data);
        file.value = null; // Reset the file after upload
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }

    return {
      file,
      fileInput,
      triggerFileInput,
      handleFileChange,
      onDragOver,
      onDrop,
      uploadFile
    };
  }
};
</script>

<style scoped>
.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.drop-area {
  border: 2px dashed #cccccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #f9f9f9;
  margin-bottom: 10px;
}

.hidden-file-input {
  display: none; /* Hide the file input */
}

button {
  margin-top: 10px;
}
</style>
