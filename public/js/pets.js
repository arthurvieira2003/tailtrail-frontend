document.querySelector(".add-pet").addEventListener("click", () => {
  Swal.fire({
    title: "Adicionar Novo Pet",
    html: `
      <form id="addPetForm" class="swal2-form">
        <div class="form-group">
          <label>Nome do Pet</label>
          <input type="text" id="petName" class="swal2-input" placeholder="Nome do pet">
        </div>
        
        <div class="form-group">
          <label>Tipo</label>
          <select id="petType" class="swal2-select">
            <option value="dog">Cachorro</option>
            <option value="cat">Gato</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Raça</label>
          <input type="text" id="petBreed" class="swal2-input" placeholder="Raça">
        </div>
        
        <div class="form-row">
          <div class="form-group half">
            <label>Idade</label>
            <input type="number" id="petAge" class="swal2-input" placeholder="Anos">
          </div>
          
          <div class="form-group half">
            <label>Peso</label>
            <input type="number" id="petWeight" class="swal2-input" placeholder="Kg">
          </div>
        </div>
        
        <div class="form-group">
          <label>Descrição</label>
          <textarea id="petDescription" class="swal2-textarea" placeholder="Descrição do pet"></textarea>
        </div>
      </form>
    `,
    showCancelButton: true,
    confirmButtonText: "Adicionar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#4CAF50",
    width: "600px",
    customClass: {
      container: "add-pet-modal",
      popup: "add-pet-popup",
      header: "add-pet-header",
      title: "add-pet-title",
      closeButton: "add-pet-close",
      content: "add-pet-content",
      input: "add-pet-input",
      actions: "add-pet-actions",
    },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    preConfirm: () => {
      const petData = {
        name: document.getElementById("petName").value,
        type: document.getElementById("petType").value,
        breed: document.getElementById("petBreed").value,
        age: document.getElementById("petAge").value,
        weight: document.getElementById("petWeight").value,
        description: document.getElementById("petDescription").value,
      };

      if (!petData.name || !petData.breed) {
        Swal.showValidationMessage(
          "Por favor, preencha todos os campos obrigatórios"
        );
        return false;
      }

      return petData;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Sucesso!",
        text: "Pet adicionado com sucesso!",
        icon: "success",
        confirmButtonColor: "#4CAF50",
      });
    }
  });
});
