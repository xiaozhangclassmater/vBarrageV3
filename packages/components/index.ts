import miniVueBarrage from './minivueBarrage';
const version = '1.0.1';

function install (app) {
  const components = [
    miniVueBarrage
  ]
  components.forEach(item => item.install ? app.use(item) : app.component(item.name, item));
}
export {
  miniVueBarrage
};

export default {
  install,
  version,
}
