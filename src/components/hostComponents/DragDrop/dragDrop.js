import React from "react";
import './dragDrop.css'
const DragDrop = () => {

    // drag state
    const [dragActive, setDragActive] = React.useState(false);

    const inputRef = React.useRef(null);

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        console.log(e.dataTransfer);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {

            // at least one file has been dropped so do something
            // handleFiles(e.dataTransfer.files);
        }
    }

    var imgs = []
    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        console.log(e.target.files);
        imgs.push(e.target.files[0])
        console.log(imgs);
        // if (e.target.files && e.target.files[0]) {
        //     const MAX_LENGTH = 2
        //     if (e.target.files.length > MAX_LENGTH) {
        //         e.preventDefault();
        //         alert(`Cannot upload files more than ${MAX_LENGTH}`);
        //     }
        // }
    };

    const onButtonClick = (e) => {
        e.preventDefault()
        inputRef.current.click();
        console.log(inputRef.current.files);

        console.log(44);
    };

    return (
        <div className=' mt-3  mb-5 p3 pb-4  d-flex justify-content-center '>
            <div className=' ' style={{ maxWidth: '700px' }}>


                <div className='my-4  p-3 '  >
                    <div className="mb-5">
                        <h2 className='' style={{ maxWidth: '550px' }}>Add some photos of your property</h2>
                        <p className="text-secondary" style={{ fontSize: '18px' }}>You'll need 5 photos to get started. You can add more or make changes later.</p>
                    </div>
                    <div className=' row' >
                        <form id="form-file-upload">
                            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
                            <label id="label-file-upload" htmlFor="input-file-upload">
                                <div>
                                    <h5>Drag your photos here</h5>
                                    <p>Choose at least 5 photos</p>
                                    <button className="upload-button" onClick={onButtonClick}>Upload from your devic</button>
                                </div>
                            </label>
                            {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}

                        </form>
                    </div >
                </div>


            </div>
        </div>
    );
};

export default DragDrop;