import React, {useRef} from 'react'

export const FileUploader = ({props}) => {
    const fileInput = useRef(null)
    const handleFileInput = (e) => {
          // handle validations
          const file = e.target.files[0];
          if (file.size > 1024)
          props.onFileSelectError({ error: "File size cannot exceed more than 1MB" });
          else props.onFileSelectSuccess(file);
        };
return (
    <div>
            <input type="file" accept="image/*" onChange={handleFileInput} />
           <button onClick={e => fileInput.current && fileInput.current.click()} />
    </div>
)
}
