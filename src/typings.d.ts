/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

type ShareOptions = { title: string; text: string; url: string };

type NavigatorShare = (options: ShareOptions) => Promise<{}>;

interface Navigator {
  share?: NavigatorShare;
}
