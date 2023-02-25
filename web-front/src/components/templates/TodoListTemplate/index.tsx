import { BaseLayout } from '@/components/organisms/BaseLayout'
import { InputForm } from '@/components/atoms/InputForm'
import { TodoList } from '@/components/organisms/TodoList'
import { useTodoContext } from '@/contexts/TodoContext'
import { useTodoTemplate } from './useTodoTemplate'

export const TodoListTemplate = () => {
    const { originTodoList, handleDeleteTodo } = useTodoContext()

    const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] = useTodoTemplate({ originTodoList })

    return (
        <BaseLayout title="Todo List">
            <div className="container">
                <div className="area">
                    <InputForm
                        value={searchKeyword}
                        placeholder={'search keyword'}
                        onChange={handleChangeSearchKeyword}
                    />
                </div>
                <div className="area">
                    {showTodoList.length > 0 && (
                        <TodoList todoList={showTodoList} handleDeleteTodo={handleDeleteTodo} />
                    )}
                </div>
            </div>
        </BaseLayout>
    )
}
