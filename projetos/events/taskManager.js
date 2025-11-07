const EventEmitter = require('events');

class TaskManager extends EventEmitter {
  constructor() {
    super();
    this.tasks = [];

    this.on('taskCreated', this.handleTaskCreated.bind(this));
    this.on('taskCancelled', this.handleTaskCancelled.bind(this));
  }

  handleTaskCreated(nome) {
    const task = {
      nome,
      status: 'pendente',
      timeout: setTimeout(() => {
        task.status = 'concluída';
        this.emit('taskCompleted', task);
      }, 30000),
    };
    this.tasks.push(task);
    console.log(`Tarefa criada: ${nome}`);
  }

  handleTaskCancelled(nome) {
    const task = this.tasks.find(t => t.nome === nome);
    if (task && task.status === 'pendente') {
      clearTimeout(task.timeout);
      task.status = 'cancelada';
      console.log(`Tarefa cancelada: ${nome}`);
    }
  }

  listTasks() {
    console.log('\nStatus das tarefas:');
    this.tasks.forEach(task => {
      console.log(`- ${task.nome}: ${task.status}`);
    });
  }
}

const manager = new TaskManager();

manager.on('taskCompleted', task => {
  console.log(`Tarefa concluída: ${task.nome}`);
});

manager.emit('taskCreated', 'Tarefa 1');
manager.emit('taskCreated', 'Tarefa 2');

setTimeout(() => {
  manager.emit('taskCancelled', 'Tarefa 2');
}, 10000);

setTimeout(() => {
  manager.listTasks();
}, 5000);
