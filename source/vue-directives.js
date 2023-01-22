const outerhtml = {
  mounted: (el, binding) => {
    el.outerHTML = `<h3 style="color: ${binding.value.color};">${binding.value.text}</h3>`;
  },
};

export default {
    outerhtml,
}