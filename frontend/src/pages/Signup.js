import React, { useState, useRef } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Webcam from "react-webcam";

const Signup = () => {
  const [image, setImage] = useState(null);
  const [id, setId] = useState("");
  const webcamRef = useRef(null);

  const handleCaptureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    webcamRef.current.video.srcObject.getVideoTracks().forEach((track) => track.stop());
  };

  const generateId = () => {
    const randomId = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    setId(randomId);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("image", dataURItoBlob(image));

    fetch("/api/signup", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Helper function to convert data URI to Blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <>
      <Meta title={"Sign Up"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <div className="d-flex">
                <div className="w-50 border-end pe-3">
                  <form onSubmit={handleSignUp} className="d-flex flex-column gap-15">
                    <CustomInput type="text" name="name" placeholder="Name" />
                    <CustomInput type="email" name="email" placeholder="Email" />
                    <CustomInput type="tel" name="mobile" placeholder="Mobile Number" />
                    <CustomInput type="password" name="password" placeholder="Password" />
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button type="submit" className="button border-0">Sign Up</button>
                    </div>
                  </form>
                </div>
                <div className="  w-50 ps-3">
                  <div className="d-flex flex-column align-items-center">
                    {image ? (
                      <>
                        <img
                          src={image}
                          alt="Captured-img"
                          style={{ maxWidth: "100%",paddingBottom :"25px"
                        }}
                        />
                        <button className="button" type="button" onClick={() => setImage(null)}>
                          Recapture Image
                        </button>
                      </>
                    ) : (
                      <>
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/png"
                          videoConstraints={{
                            width: 620,
                            height: 320,
                          }}
                          style={{
                            width: "100%",
                            height: "auto",
                            paddingBottom: "25px",
                            borderRadius: "50px",
                          }}
                        />

                        <button className="button" type="button" onClick={handleCaptureImage}>
                          Capture Image
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
