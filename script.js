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
    alert(`✅ Visita registrada com sucesso no estande "${estande.toUpperCase()}"`);
  }).catch(error => {
    console.error("Erro ao registrar visita:", error);
    alert("❌ Ocorreu um erro ao registrar sua visita. Tente novamente.");
  });
}
