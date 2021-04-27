import { App } from 'vue';
import { ElButton, ElSelect, ElLoading } from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';

const components = [ElButton, ElSelect];

const plugins = [ElLoading];

export default function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component);
  });

  plugins.forEach((plugin) => {
    app.use(plugin);
  });
}
