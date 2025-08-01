const studentDatabase = {
        "950422104003": "M.Akash",
        "950422104004": "M.AriramaSelvam",
        "950422104011": "N.Davidjones",
        "950422104030": "M.Linga Bharath",
        "950422104035": "P.Mari Selvam",
        "950422104037": "S.Matheswaran",
        "950422104038": "C.Michael Selvin",
        "950422104041": "V.Muthukumar",
        "950422104051": "C.Selton",
        "950422104053": "S.Sheikanwar",
        "950422104054": "S.Sivabalan",
        "950422104055": "K.Srikaran",
        "950422104058": "B.Vignesh",
        "950422104059": "L.Vilvadurai"

  };
  
  let presentStudents = new Set();
  
  const video = document.getElementById("video");
  const scannedIdText = document.getElementById("scannedIdText");
  const statusText = document.getElementById("statusText");
  
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => video.srcObject = stream)
    .catch(err => statusText.textContent = "❌ Cannot access camera!");
  
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  
  function scanFrame() {
    if (!video.videoWidth) return requestAnimationFrame(scanFrame);
  
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);
  
    if (code && studentDatabase[code.data]) {
      const id = code.data.trim();
      if (!presentStudents.has(id)) {
        presentStudents.add(id);
        scannedIdText.textContent = `✅ Marked: ${studentDatabase[id]}`;
        statusText.textContent = "Attendance marked.";
      } else {
        statusText.textContent = "Already scanned.";
      }
    }
  
    requestAnimationFrame(scanFrame);
  }
  requestAnimationFrame(scanFrame);
  
  // Staff login
  const staffLoginBtn = document.getElementById("staffLoginBtn");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const staffStatusText = document.getElementById("staffStatusText");
  
  staffLoginBtn?.addEventListener("click", () => {
    if (usernameInput.value === "admin" && passwordInput.value === "admin@123") {
      localStorage.setItem("presentStudents", JSON.stringify([...presentStudents]));
      window.location.href = "attendancePage.html";
    } else {
      staffStatusText.textContent = "❌ Invalid credentials";
    }
  });
  
