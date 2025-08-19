function showSnackbar(message, type = 'success') {
  const snackbar = document.getElementById("snackbar");
  snackbar.textContent = message;
  snackbar.className = `show ${type}`;
  
  setTimeout(() => {
    snackbar.className = snackbar.className.replace(`show ${type}`, '');
  }, 1000);
}

function registrarVisita(estande) {
  const ref = db.collection("visitas").doc(estande);

  ref.get().then(doc => {
    if (doc.exists) {
      return ref.update({
        quantidade: firebase.firestore.FieldValue.increment(1)
      });
    } else {
      return ref.set({ quantidade: 1 });
    }
  }).then(() => {
    showSnackbar(`✅ Visita registrada com sucesso no estande "${estande.toUpperCase()}"`, 'success');
  }).catch(error => {
    console.error("Erro ao registrar visita:", error);
    showSnackbar("❌ Ocorreu um erro ao registrar sua visita. Tente novamente.", 'error');
  });
}
