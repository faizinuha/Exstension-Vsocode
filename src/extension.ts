import * as vscode from 'vscode';
import { FileWatcherFeature } from './features/fileWatcher';

export function activate(context: vscode.ExtensionContext) {
    try {
        // Inisialisasi FileWatcher untuk mengubah nama file pendek ke panjang
        new FileWatcherFeature(context);
        console.log('File Watcher Extension berhasil diaktifkan!');

        let disposable = vscode.commands.registerCommand('meiko-web.hello', () => {
            vscode.window.showInformationMessage('Hello from Meiko Web!');
        });

        context.subscriptions.push(disposable);
    } catch (error) {
        console.error('Terjadi kesalahan saat mengaktifkan extension:', error);
    }
}

export function deactivate() {}
