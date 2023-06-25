import React, { useState, useRef, useEffect } from "react";
import { app } from "../firebaseconfig";
import { getDatabase, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, updateDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, list, uploadString } from "firebase/storage";
import FileInputGambar from "./uploadgambar";
import { Editor } from "@tinymce/tinymce-react";
import { async } from "@firebase/util";
import { v4 } from "uuid";

const storage = getStorage(app);

const options = [
  { label: "Emosional", value: "Emosional" },
  { label: "Karakter", value: "Karakter" },
  { label: "Pendidikan", value: "Pendidikan" },
  { label: "Hobi", value: "Hobi" },
  { label: "Perkembangan Fisik", value: "Perkembangan Fisik" },
  { label: "Komunikasi", value: "Komunikasi" },
  { label: "Kognitif", value: "Kognitif" },
  { label: "Pendidikan anak usia dini", value: "Pendidikan anak usia dini" },
  { label: "Psikologi & Pola Asuh ", value: "Psikologi & Pola Asuh" },
  { label: "Kesehatan Anak ", value: "Kesehatan Anak" },
  { label: "Kehamilan ", value: "Kehamilan" },
  { label: "Perencanaan Keuangan", value: "Perencanaan Keuangan" },
];

const FormInput = () => {
  const editorRef = useRef(null);
  const judulRef = useRef();
  const [imageUpload, setImageUpload] = useState(null);
  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form

      const content = editorRef.current.getContent();
      const docu = new DOMParser().parseFromString(content, "text/html");
      const imgElements = docu.querySelectorAll("img");
      for (let i = 0; i < imgElements.length; i++) {
        const img = imgElements[i];
        const imageUrl = img.src;
        const storageRef = ref(storage, `images/${Date.now()}_${Math.floor(Math.random() * 100000)}.png`);
        await uploadString(storageRef, imageUrl, "data_url");
        const downloadUrl = await getDownloadURL(storageRef);
        img.src = downloadUrl;
      }

      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/thumbnail ${judulRef.current.value}`);
      await uploadBytes(imageRef, imageUpload);
      const imageUrl = await getDownloadURL(imageRef);

      const dateCreated = Timestamp.now();
      const tanggal = dateCreated.toDate().toDateString();

      const db = getFirestore(app);
      setDoc(doc(db, "artikel", judulRef.current.value), {
        kontent: docu.body.innerHTML,
        thumbnail: imageUrl,
        Kategori: selectedOption,
        tanggal: tanggal,
        judul: judulRef.current.value,
      });

      console.log("Form submitted:", judulRef.current.value);

      judulRef.current.value = "";
      setErrors({});

      /*const storageRef = ref(storage, `images/${Date.now()}_${Math.floor(Math.random() * 100000)}.png`);
      const downloadUrl = await getDownloadURL(storageRef);
      const updatedContent = 
      await updateDoc(doc(db, "artikel", judulRef.current.value),{

      });*/
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // if (!formValues.title.trim()) {
    //   errors.title = "gambar harus di isi";
    // }

    // if (!formValues.text.trim()) {
    //   errors.text = "isi artikel nya";
    // }

    return errors;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Input Artikel</h1>
      {/* <FileInputGambar /> */}
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium mb-1">
            Gambar
          </label>
          <input type="file" id="image" accept="image/*" onChange={handleInputChange} value={formValues.gambar} className="border border-gray-300 rounded p-2 w-full" />
        </div> */}
        <div>
          <p className="block text-lg font-medium mb-2">Thumbnail</p>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
        </div>

        <div className="mt-5">
          <select value={selectedOption} onChange={handleOptionChange} className="p-2 rounded border border-gray-300">
            <option value="">Pilih Kategori</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="judul" className="block text-lg font-medium mb-1 mt-5">
            Title
          </label>
          <input type="text" id="judul" ref={judulRef} className="border border-gray-300 rounded p-2 w-full" />
        </div>

        <div className="mb-4">
          <label htmlFor="text" className="block text-lg font-medium mb-1">
            Teks
          </label>
          <Editor
            apiKey="3dbc4siucidpab7ck2y78qpnb6px0uuwef8lsy0db579zylu"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "image code", "help", "wordcount"],
              toolbar: "undo redo | blocks | " + "bold italic forecolor | alignleft aligncenter " + "alignright alignjustify | bullist numlist outdent indent | " + "removeformat | help image code",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              images_upload_url: storage.upload,
              /*images_upload_handler: async (blobInfo, success) => {
                try {
                  const uploadTask = await uploadString(ref(storage, `images/${Date.now()}_${Math.floor(Math.random() * 100000)}.png`), blobInfo.base64(), "data_url");
                  const downloadUrl = await getDownloadURL(uploadTask.ref);
                  success(downloadUrl);
                } catch (error) {
                  console.log("Error uploading file:", error);
                }
              },*/
            }}
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormInput;
