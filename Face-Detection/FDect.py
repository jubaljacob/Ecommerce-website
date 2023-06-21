import cv2
import face_recognition

img = cv2.imread("Face-Detection/jubal.jpg")
rgb_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
image_encoding  =face_recognition.face_encodings(rgb_img)[0]


img2 = cv2.imread("Face-Detection/images/Nived.jpg")
rgb_img2 = cv2.cvtColor(img2, cv2.COLOR_BGR2RGB)
image_encoding2  =face_recognition.face_encodings(rgb_img2)[0]

result = face_recognition.compare_faces([image_encoding], image_encoding2)
print("Result: ", result)


cv2.imshow("output", img)
cv2.imshow("output2", img2)

cv2.waitKey(0)
