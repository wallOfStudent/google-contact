// -------Selects all elements-------------

// buttons --------
const btnCancelAddModal = document.querySelector("#cancel-label");
const btnSaveLabel = document.querySelector("#save-label");
const btnAddContact = document.querySelector("#add-contact");
const btnShowTabContacts = document.querySelector("#list-contact");
const btnShowTabFrequentContacts = document.querySelector("#frequent-contact");
//---------------------

// Tabs ----------------
const contactTab = document.querySelector("#contact-tab");
const frequentContactTab = document.querySelector("#frequent-section");
const addContactTab = document.querySelector("#add-contact-section");
// --------------------

const burgerMenu = document.querySelector("#burger-menu");
const sideBarMenu = document.querySelector("#side-bar");
const mainSection = document.querySelector("#contact-tab");
const openAddLabelModal = document.querySelector("#add-label");
const addLabelModal = document.querySelector("#label-modal");

const labelContainer = document.querySelector("#label-container");

const inputLabel = document.querySelector("#label-name");
const errorAddLabel = document.querySelector("#label-error");

// Validations

const isInputValid = (value) => {
  value = value.trim();
  if (value && value !== " ") {
    return true;
  }
  return false;
};

// Callback functions

const handleAddStyle = (element, style) => {
  element.classList.add(style);
};

const handleRemoveStyle = (element, style) => {
  element.classList.remove(style);
};

const handleOpenModal = (element) => {
  handleAddStyle(element, "flex");
};

const handleCloseModal = (element) => {
  handleRemoveStyle(element, "flex");
};

const createElement = (tag, properties) => {
  const element = document.createElement(tag);
  Object.assign(element, properties);

  return element;
};

const showTab = (tab) => {
  switch (tab) {
    case "addContact":
      handleRemoveStyle(btnShowTabContacts, "active-btn");
      handleRemoveStyle(btnShowTabFrequentContacts, "active-btn");

      handleRemoveStyle(addContactTab, "display-none");
      handleAddStyle(contactTab, "display-none");
      handleAddStyle(frequentContactTab, "display-none");
      break;
    case "frequent":
      handleRemoveStyle(btnShowTabContacts, "active-btn");
      handleAddStyle(btnShowTabFrequentContacts, "active-btn");

      handleRemoveStyle(frequentContactTab, "display-none");
      handleAddStyle(contactTab, "display-none");
      handleAddStyle(addContactTab, "display-none");
      break;
    default:
      handleAddStyle(btnShowTabContacts, "active-btn");
      handleRemoveStyle(btnShowTabFrequentContacts, "active-btn");

      handleRemoveStyle(contactTab, "display-none");
      handleAddStyle(frequentContactTab, "display-none");
      handleAddStyle(addContactTab, "display-none");
      break;
  }
};

// Add events

burgerMenu.addEventListener("click", (event) => {
  if (sideBarMenu.classList.contains("display-none")) {
    handleRemoveStyle(sideBarMenu, "display-none");
    handleRemoveStyle(mainSection, "w-100");
  } else {
    handleAddStyle(sideBarMenu, "display-none");
    handleAddStyle(mainSection, "w-100");
  }
});

openAddLabelModal.addEventListener("click", (event) => {
  handleOpenModal(addLabelModal);
});

btnCancelAddModal.addEventListener("click", () => {
  handleCloseModal(addLabelModal);
});

btnSaveLabel.addEventListener("click", (event) => {
  if (!isInputValid(inputLabel.value)) {
    handleRemoveStyle(errorAddLabel, "visibility-hidden");
    return;
  }

  handleAddStyle(errorAddLabel, "visibility-hidden");
  const firstSpan = createElement("span", {
    textContent: "label",
    className: "material-icons margin-right-04rem",
  });
  const lastSpan = createElement("span", {
    textContent: "0",
  });

  const paragraph = createElement("p", {
    textContent: inputLabel.value,
    className: "flex items-center justify-s-between",
  });

  paragraph.prepend(firstSpan);

  const button = createElement("button", {
    type: "button",
    className:
      "button justify-s-between flex items-center button-hover-bg-color button-radius-10 w-100",
  });

  button.append(paragraph, lastSpan);

  labelContainer.appendChild(button);

  handleCloseModal(addLabelModal);
  inputLabel.value = "";
});

btnAddContact.addEventListener("click", (event) => {
  showTab("addContact");
});

btnShowTabFrequentContacts.addEventListener("click", (event) => {
  showTab("frequent");
});

btnShowTabContacts.addEventListener("click", (event) => {
  showTab();
});
